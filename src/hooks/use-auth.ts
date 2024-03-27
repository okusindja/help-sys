import { FirebaseError } from "@firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { FIREBASE_AUTH } from "../FirebaseConfig";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [emailInUseError, setEmailInUseError] = useState(false);
  const [weakPasswordError, setWeakPasswordError] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [userNotFoundError, setUserNotFoundError] = useState(false);
  const [wrongPasswordError, setWrongPasswordError] = useState(false);
  const [missingPasswordError, setMissingPasswordError] = useState(false);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          await AsyncStorage.setItem("userToken", token);
          setToken(token);
        } catch (error) {
          console.error("Error storing token:", error);
        }
      } else {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.error("Error removing token:", error);
        }
      }
      if (initializing) setInitializing(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      handleLoginErrors(error);
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      handleCreateUserErrors(error);
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userToken");
      setToken(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUserErrors = (error: FirebaseError) => {
    switch (error.code) {
      case "auth/missing-password":
        setMissingPasswordError(true);
        setWeakPasswordError(false);
        setInvalidEmailError(false);
        setEmailInUseError(false);
        break;
      case "auth/weak-password":
        setWeakPasswordError(true);
        setMissingPasswordError(false);
        setInvalidEmailError(false);
        setEmailInUseError(false);
        break;
      case "auth/invalid-email":
        setInvalidEmailError(true);
        setWeakPasswordError(false);
        setEmailInUseError(false);
        setMissingPasswordError(false);
        break;
      case "auth/email-already-in-use":
        setEmailInUseError(true);
        setInvalidEmailError(false);
        setWeakPasswordError(false);
        setMissingPasswordError(false);
        break;
      default:
        console.error(error);
    }
  };

  const handleLoginErrors = (error: FirebaseError) => {
    switch (error.code) {
      case "auth/invalid-credential":
        setWrongPasswordError(true);
        setUserNotFoundError(false);
        setInvalidEmailError(false);
        setMissingPasswordError(false);
        break;
      case "auth/user-not-found":
        setUserNotFoundError(true);
        setWrongPasswordError(false);
        setInvalidEmailError(true);
        setMissingPasswordError(false);
        break;
      case "auth/invalid-email":
        setInvalidEmailError(true);
        setWeakPasswordError(false);
        setUserNotFoundError(true);
        setMissingPasswordError(false);
        break;
      case "auth/missing-password":
        setMissingPasswordError(true);
        setInvalidEmailError(false);
        setUserNotFoundError(false);
        setWrongPasswordError(false);
        break;
      default:
        console.error(error);
    }
  };

  const resetErrors = () => {
    setMissingPasswordError(false);
    setWeakPasswordError(false);
    setInvalidEmailError(false);
    setEmailInUseError(false);
    setWrongPasswordError(false);
    setUserNotFoundError(false);
  };

  return {
    user,
    login,
    token,
    logout,
    loading,
    createUser,
    resetErrors,
    initializing,
    emailInUseError,
    invalidEmailError,
    weakPasswordError,
    userNotFoundError,
    handleLoginErrors,
    wrongPasswordError,
    missingPasswordError,
    handleCreateUserErrors,
  };
};

export default useAuth;
