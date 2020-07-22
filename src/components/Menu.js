import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    List,
    ListItem,
    useDisclosure,
} from "@chakra-ui/core";
import React from 'react';

let Menu= () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    return (
        <div>
            <Button ref={btnRef} height="2em" backgroundColor="green" variantColor="green" onClick={onOpen} transform="rotate(-90deg)" position="absolute"
                    right="-2em" top="10em">
                Menú
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                isFullHeight={false}
                size={"sm"}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Contenido
                    </DrawerHeader>
                    <DrawerBody ml={3}>
                        <List styleType="none" spacing={4}>
                            <ListItem fontSize="xl">Proyectos</ListItem>
                            <List styleType="none" spacing={1}>
                                <ListItem ml={4}>ADMAS</ListItem>
                                <ListItem ml={4}>EXODUX</ListItem>
                                <ListItem ml={4}>Domótica Emocional</ListItem>
                                <ListItem ml={4} mb={4}>Pregrado</ListItem>
                            </List>
                            <ListItem fontSize="xl">Equipo</ListItem>
                            <ListItem fontSize="xl">Divulgación</ListItem>
                            <ListItem fontSize="xl">English</ListItem>
                        </List>
                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
let DrawerExa= () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        BODY
                    </DrawerBody>

                    <DrawerFooter>
                        <Button onClick={onClose}>
                            Cancel
                        </Button>
                        <Button >Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
}


export default DrawerExa;
