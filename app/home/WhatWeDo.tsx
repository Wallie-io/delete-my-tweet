'use client'

import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react'

export default function WhatWeDo() {
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.700')}>
            <Container py={{ base: 10, md: '32' }} maxW={'container.lg'}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                    gap={10}
                >
                    <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                        <Heading as={'h2'}>
                            Here are some made up numbers
                        </Heading>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                            <Text fontSize={'4xl'} fontWeight={'bold'}>
                                91%
                            </Text>
                            <Box fontSize={'sm'}>
                                Of the internet is throw away content. Do we
                                really need to hold on to everything that we
                                ever say forever?
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                            <Text fontSize={'4xl'} fontWeight={'bold'}>
                                42%
                            </Text>
                            <Box fontSize={'sm'}>
                                Of people on X/Twitter post at least once per
                                day. That is millions of users who should
                                probably think twice about their public facing
                                brand.
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}
