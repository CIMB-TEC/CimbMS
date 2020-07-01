import React from 'react';
import './App.css';
import {
    Button,
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/core";


function App() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            {/*<Button variantColor="green">Button</Button>*/}
            <p onClick={onOpen}>Open</p>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..."/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button  mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button >Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default App;

