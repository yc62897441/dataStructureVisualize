import styled from 'styled-components'

// 標題
const TitleConfig = {
    h1: {
        fontWeight: 500,
        fontSize: '72px',
    },
    h2: {
        fontWeight: 500,
        fontSize: '60px',
    },
    h3: {
        fontWeight: 500,
        fontSize: '48px',
    },
    h4: {
        fontWeight: 500,
        fontSize: '36px',
    },
    h5: {
        fontWeight: 500,
        fontSize: '24px',
    },
}
const Title = styled.h1`
    margin: 0 0 10px;
    color: #000000;
    font-family: 'Noto Sans TC';
    font-style: normal;
`
export const H1 = styled(Title)`
    font-weight: ${TitleConfig.h1.fontWeight};
    font-size: ${TitleConfig.h1.fontSize};
`
export const H2 = styled(Title)`
    font-weight: ${TitleConfig.h2.fontWeight};
    font-size: ${TitleConfig.h2.fontSize};
`
export const H3 = styled(Title)`
    font-weight: ${TitleConfig.h3.fontWeight};
    font-size: ${TitleConfig.h3.fontSize};
`
export const H4 = styled(Title)`
    font-weight: ${TitleConfig.h4.fontWeight};
    font-size: ${TitleConfig.h4.fontSize};
`
export const H5 = styled(Title)`
    font-weight: ${TitleConfig.h5.fontWeight};
    font-size: ${TitleConfig.h5.fontSize};
`

// 文字段落
const TextConfig = {
    color: '#000000',
    fontFamily: 'Noto Sans TC',
    fontStyle: 'normal',
    fontSize: '18px',
}
export const Text = styled.p`
    color: ${TextConfig.color};
    font-family: ${TextConfig.fontFamily};
    font-style: ${TextConfig.fontStyle};
    font-size: ${TextConfig.fontSize};
`
export const Span = styled.span`
    color: ${TextConfig.color};
    font-family: ${TextConfig.fontFamily};
    font-style: ${TextConfig.fontStyle};
    font-size: ${TextConfig.fontSize};
    font-weight: 600;
`
export const SpanRed = styled(Span)`
    color: #b22222;
`

// 段落容器
export const Paragraph = styled.div`
    margin: 10px 0;
`

// 清單
export const Ol = styled.ol`
    margin: 0;
    padding: 0 0 0 40px;
`
export const Ul = styled.ul`
    margin: 0;
    padding: 0 0 0 40px;
    list-style-type: disc;
`
export const Li = styled.li`
    color: ${TextConfig.color};
    font-family: ${TextConfig.fontFamily};
    font-style: ${TextConfig.fontStyle};
    font-size: ${TextConfig.fontSize};
`

// 程式碼
export const CodeWrapper = styled.div`
    color: rgb(197, 200, 198);
    text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;
    /* font-family: 'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace'; */
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    padding: 1em;
    margin: 0.5em 0px;
    overflow: auto;
    border-radius: 0.3em;
    background: rgb(29, 31, 33);
`
export const Code = styled.code`
    color: rgb(197, 200, 198);
    text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;
    /* font-family: 'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace'; */
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    /* line-height: 1.5; */
    font-size: 18px;
    tab-size: 4;
    hyphens: none;
`