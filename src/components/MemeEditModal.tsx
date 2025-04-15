import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  NumberInput,
  Button,
  ModalContent,
} from "@heroui/react";
import { Meme } from "@/types";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  meme: Meme | null;
  onChange: (updated: Meme) => void;
  onSave: () => void;
}

export default function MemeEditModal({
  isOpen,
  onOpenChange,
  meme,
  onChange,
  onSave,
}: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
            {meme && (
              <ModalBody>
                <Input
                  label="ID"
                  value={meme.id.toString()}
                  isReadOnly
                  variant="bordered"
                />
                <Input
                  label="Title"
                  value={meme.title}
                  onChange={(e) => onChange({ ...meme, title: e.target.value })}
                  isRequired
                  minLength={3}
                  maxLength={100}
                  variant="bordered"
                />
                <Input
                  label="Url (JPG)"
                  value={meme.image}
                  onChange={(e) => onChange({ ...meme, image: e.target.value })}
                  isRequired
                  type="url"
                  pattern="https?://.+\.jpg"
                  variant="bordered"
                />
                <NumberInput
                  label="Likes"
                  value={meme.likes}
                  onChange={(value) => {
                    const parsedValue =
                      typeof value === "number"
                        ? value
                        : Number(value.target.value);
                    onChange({ ...meme, likes: parsedValue });
                  }}
                  minValue={0}
                  maxValue={99}
                  variant="bordered"
                />
              </ModalBody>
            )}
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onSave();
                  onClose();
                }}
              >
                Зберегти
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
