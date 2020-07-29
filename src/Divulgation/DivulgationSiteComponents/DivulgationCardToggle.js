import React from 'react'
import {Box, Button, Collapse, Flex, Image, Stack, Text,} from "@chakra-ui/core";


function DivulgationCardToggle() {
    const [show, setShow] = React.useState(false);
    const [showImages, setShowImages] = React.useState(false);

    const handleToggle = () => setShow(!show);
    const handleToggleImages = () => setShowImages(!showImages)

    return (
        <Box marginTop='30px'>
            <Button marginRight='25px' variant="outline" borderColor='#48BB78' color='#48BB78' onClick={handleToggle}>
                Abstract
      </Button>

            <Button variant="outline" borderColor='#48BB78' color='#48BB78' onClick={handleToggleImages}>
                Images
      </Button>


            <Collapse mt={4} isOpen={show}>


                <Box><Text >This paper deals with the application of interactive engineering through an electroencephalogram (EEG) to detect the level of distraction or concentration of drivers of automotive vehicles. In particular, for the case of alerts, signals or outputs emitted by an advanced driver assistance systems (ADAS) in the intelligent transportation systems context. To do that and based on the state-of-the-art, an experimental protocol to detect distraction by using EEG signals of driver has been developed. Finally, the goal is to detect if drivers paid attention on the road when different kinds of alerts are emitted by the ADAS. In terms of signal processing, the challenge was the noise level in EEG records due to quality of road that had some bumpers and potholes that add noise in records due to movements of drivers. With the proposed protocol, the efficiency and utility of ADAS can be evaluated by designers to create new adaptable cabins to provide the driver a better driving environment reducing distractions according to the neurological profile. New perspectives and discussion are formulated in this paper, for example, to enhance the interactive design of the automotive vehicle cabins.</Text></Box>


            </Collapse>
            {/* Img. idealmente 150 px */}

            <Collapse mt={4} isOpen={showImages}>
                <Flex justify='space-around'>
                    <Stack maxWidth='200px'>
                        <Image src='https://uhwfoundation.org/wp-content/uploads/2017/10/og-image-200x200.png'></Image>
                        <Box> <Text>Description Description Description Description Description </Text> </Box>
                    </Stack>
                    <Stack maxWidth='200px'>
                        <Image src='https://uhwfoundation.org/wp-content/uploads/2017/10/og-image-200x200.png'></Image>
                        <Box> <Text>Description Description Description Description Description </Text> </Box>
                    </Stack>
                </Flex>
            </Collapse>

        </Box>
    );
}

export default DivulgationCardToggle;