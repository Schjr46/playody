// @flow
import * as React from 'react'
import {
    ButtonGroup,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { RiSearchLine } from 'react-icons/ri'
import { PlayodyTitle } from '@/components/PlayodyTitle'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import NextLink from 'next/link'

type Props = {
    children?: ReactNode
}

export function NavBar({ children, ...props }: Props) {
    const router = useRouter()
    return (
        <>
            <nav
                className={`tw-w-full tw-sticky tw-top-0 tw-backdrop-blur-sm tw-z-10 tw-mb-2 tw-block}`}
            >
                <div className="tw-w-full tw-p-2 tw-bg-black/20 tw-hidden md:tw-flex tw-justify-between tw-gap-2 tw-rounded-md">
                    <div className={'tw-w-fit tw-flex tw-flex-row tw-space-x-2'}>
                        <ButtonGroup
                            display={{ base: 'none', md: 'block' }}
                            w="fit-content"
                        >
                            <IconButton
                                icon={<FiChevronLeft />}
                                title={'Back'}
                                aria-label={'back button'}
                                onClick={() => router.back()}
                            />
                            <IconButton
                                icon={<FiChevronRight />}
                                title={'Forward'}
                                aria-label={'back button'}
                                onClick={() => router.forward()}
                                isDisabled
                            />
                        </ButtonGroup>
                        <div>{children}</div>
                    </div>
                    <div
                        className={
                            'tw-hidden md:tw-flex tw-justify-center tw-items-center tw-px-2'
                        }
                    >
                        <NextLink href={'/'}>
                            <PlayodyTitle />
                        </NextLink>
                    </div>
                </div>
                {children && (
                    <div
                        className={
                            'tw-w-full tw-p-2 tw-bg-black/20 tw-flex md:tw-hidden tw-justify-between tw-rounded-md'
                        }
                    >
                        {children}
                    </div>
                )}
            </nav>
        </>
    )
}
