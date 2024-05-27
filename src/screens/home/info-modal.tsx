import { Modal, View, Text } from 'react-native';
import { styles } from './styles';

interface InfoModalProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  title: string;
  children: React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isVisible,
  toggleVisibility,
  title,
  children,
}) => (
  <Modal
    animationType='slide'
    transparent={true}
    visible={isVisible}
    onRequestClose={toggleVisibility}
  >
    <View style={styles.overlay}>
      <View style={styles.Modal1}>
        <Text style={styles.titleModal}>{title}</Text>
        {children}
      </View>
    </View>
  </Modal>
);

export default InfoModal;
