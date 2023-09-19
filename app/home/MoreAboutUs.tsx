'use client'

import { ReactElement } from 'react'
import { Icon, Text, Stack, Flex, Container, Grid } from '@chakra-ui/react'
import { FcDataProtection, FcBullish, FcProcess } from 'react-icons/fc'

interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text>{text}</Text>
        </Stack>
    )
}

export default function MoreAboutUs() {
    return (
        <Container pt={20} pb={30} maxW={'container.lg'}>
            <Grid
                templateColumns={{
                    base: 'repeat(3, 1fr)',
                }}
                gap={10}
            >
                <Feature
                    icon={<Icon as={FcDataProtection} w={10} h={10} />}
                    title={'Low Risk'}
                    text={
                        'The app does not start on your account until you push a button. All deleted Tweets are saved to your account here (but you cannot restore them in anyway).'
                    }
                />
                <Feature
                    icon={<Icon as={FcProcess} w={10} h={10} />}
                    title={'Unlimited Deletes'}
                    text={
                        'With our unlimited package, you can clear your entire history at the rate @elon will lets according to their API.'
                    }
                />
                <Feature
                    icon={<Icon as={FcBullish} w={10} h={10} />}
                    title={'Instant Delivery'}
                    text={
                        'After you login, you simple adjust your settings and turn on the deleter and you will see archived likes coming through.'
                    }
                />
            </Grid>
        </Container>
    )
}
