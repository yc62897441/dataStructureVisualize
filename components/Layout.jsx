import styled from 'styled-components'
import Header from './Header.jsx'

import Image from 'next/image.js'

const LayoutWrapper = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
`

const MainWrapper = styled.section`
    flex-grow: 1;
    margin-top: 50px;

    @media (min-width: 768px) {
        margin-top: 65px;
    }

    @media (min-width: 1600px) {
        margin-top: 80px;
    }
`
const MainContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

const ScrollToTop = styled.div`
    position: absolute;
    bottom: 15px;
    right: 20px;
    z-index: -9999;
    opacity: 0;

    @media (min-width: 768px) {
        position: fixed;
        z-index: 9996;
        opacity: 1;
        cursor: pointer;
    }
`

export default function Layout({ children }) {
    function scrollToTop() {
        if (window) {
            window.window.scrollTo(0, 0)
        }
    }

    return (
        <LayoutWrapper>
            <Header />
            <MainWrapper>
                <MainContainer>{children}</MainContainer>
            </MainWrapper>
            <ScrollToTop onClick={scrollToTop}>
                <Image
                    src="/images/arrow.png" // Route of the image file
                    width={40} // Desired size with correct aspect ratio
                    height={40} // Desired size with correct aspect ratio
                    alt="top arrow"
                />
            </ScrollToTop>
        </LayoutWrapper>
    )
}
