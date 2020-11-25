import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/core";

import rogelio from "../img/rogelio.jpg";
import { FaResearchgate } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

function PersonasCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex>
        <Stack
          marginRight="25px"
          marginLeft="25px"
          marginTop="20px"
          borderRadius="5%"
          border="2px"
          borderColor={props.bor}
          w="300px"
          p="10px"
          bg="#222222"
          color="#f1f2f4"
          
        >
          <Flex justify="center">
            <Image w="200px" h="250px" src={rogelio}></Image>
          </Flex>

          <Box>
            <Text textAlign="center" fontSize="25px">
              Dr. Rogelio Bustamante Bello
            </Text>
          </Box>

          <Flex justify="space-around">
            <Box as={MdMailOutline} color="white" size="30px" />
            <Box as={AiOutlineLinkedin} color="white" size="30px" />
            <Box as={FaResearchgate} color="white" size="30px" />
          </Flex>

          <Button onClick={onOpen}  border="2px" variantColor={props.col} variant="outline">
            Read More
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                televisión situada en la época del paso de la República romana
                al Imperio. Fue estrenada en Estados Unidos en agosto de 2005.
                Fue creada por John Milius, William J. MacDonald, y Bruno Heller
                como coproducción entre la BBC (Reino Unido), la cadena de pago
                HBO (Estados Unidos), y la RAI (Italia). Fue rodada en los
                alrededores de la actual ciudad de Roma y en los antiguos
                estudios de Cinecittà, en una superficie de más de 20 000 metros
                cuadrados, con la participación de 350 personas. Por ellos es
                una de las series más caras de la televisión, con un presupuesto
                de 100 millones para sus dos temporadas. Además ha sido
                galardonada con el premio BAFTA y cuenta con dos nominaciones a
                los Globo de Oro.
              </ModalBody>

              <ModalFooter>
                <Button variantColor="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Flex>
    </Box>
  );
}

export default PersonasCard;
