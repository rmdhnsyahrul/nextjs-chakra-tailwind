import { ModalBodyProps, ModalProps, Modal as BaseModal, ModalHeaderProps, ModalOverlayProps, ModalFooterProps, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, ModalContentProps, ModalContent } from '@chakra-ui/react'
import React from 'react'

export interface IModalProps {
  modalProps?: ModalProps,
  modalOverlayProps: ModalOverlayProps,
  modalContent?: ModalContentProps,
  modalHeaderProps?: ModalHeaderProps,
  modalBodyProps?: ModalBodyProps
  modalFooterProps?: ModalFooterProps
}

export const Modal = ({children, ...restProps}: ModalProps) => {
  return (
    <BaseModal {...restProps}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text as="h1" className='text-Semantic_Text_text_primary'>{children}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      {children}
    </BaseModal>
  )
}

export default Modal