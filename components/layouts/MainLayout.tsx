import {
    Box,
    Stack,
    useDisclosure,
    IconButton,
} from '@chakra-ui/react'
import AudioPlayer from '../AudioPlayer'
import SideBar from './SideBar'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import LogoSvg from '@/components/LogoSvg'
import { PlayodyTitle } from '@/components/PlayodyTitle'
import React from 'react'
import { NavBar } from '@/components/NavBar'

function MainLayout({ children, navbar = true }: { children: React.ReactNode, navbar?: boolean }) {
    const { isOpen, onClose, onToggle } = useDisclosure()

    return (
        <div className={'tw-h-screen tw-flex tw-flex-col'}>
            <header className={'tw-block md:tw-hidden tw-p-2'}>
                <div className={'tw-flex tw-justify-between tw-rounded-md tw-bg-black/20 tw-p-2'}>
                    <div className={'tw-flex-none'}>
                        <IconButton
                            aria-label='burger button'
                            onClick={onToggle}
                            icon={isOpen ? <BiLeftArrow /> : <BiRightArrow />}
                        />
                    </div>
                    <div className={'tw-grow tw-flex tw-justify-center tw-items-center tw-overflow-x-hidden'}>
                        <PlayodyTitle />
                    </div>
                    <div
                        className={'tw-flex-none tw-rounded-md tw-p-1 tw-bg-white/10 hover:tw-bg-white/20 tw-cursor-pointer'}
                    >
                        <LogoSvg w={8} h={8} />
                    </div>
                </div>
            </header>
            <div className={'tw-grow tw-overflow-y-auto'}>
                <div
                    className={'tw-h-full tw-w-full tw-max-w-xs tw-hidden md:tw-flex tw-float-left tw-flex-col tw-space-y-2 tw-resize-x tw-py-2 tw-pl-2'}>
                    <SideBar />
                </div>
                <div className={'tw-overflow-y-auto tw-grow tw-h-full tw-flex-col tw-p-2'}>
                    {isOpen &&
                        <div onClick={onClose} className={'md:tw-hidden tw-flex tw-flex-col tw-space-y-2 '}>
                            <SideBar />
                        </div>
                    }
                    <main className={'tw-grow tw-h-full tw-rounded-md'}>
                        {navbar && <NavBar/>}
                        {children}
                    </main>
                </div>
            </div>
            <div className={'tw-bottom-0'}>
                <AudioPlayer />
            </div>
        </div>
    )
}

export default MainLayout
