import styled from 'styled-components'
import Image from 'next/image.js'

import Layout from '../../components/Layout.jsx'
import {
    H1,
    H2,
    H3,
    H4,
    Text,
    Span,
    SpanRed,
    Paragraph,
    Ol,
    Ul,
    Li,
    CodeWrapper,
    Code,
} from '../../components/content/Content.jsx'

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
function Algorithm() {
    function fn1(n) {
        let sum = 0
        for (let i = 0; i < n; i++) {
            sum += n
        }
        return sum
    }
    function fn2(n) {
        if (n === 1) return 1
        return ((1 + n) * n) / 2
    }

    return (
        <Layout>
            <H1>演算法概述</H1>

            <Paragraph>
                <Text>
                    演算法是一個有限的、良好定義且電腦可執行的連續指令，典型上用來解決某一特定類型的問題，或是問題計算。
                </Text>
            </Paragraph>

            <Paragraph>
                <H3>演算法的應用實例：</H3>
                <Ol>
                    <Li>google map上，眾多的線排列組合中，如何找出最短或最快速的路徑。</Li>
                    <Li>youtube上，數十億支的影片中，如何找出某用戶最可能感興趣的影片。</Li>
                    <Li>excel上，對數萬筆資料，如何做 sort 排列。</Li>
                    <Li>
                        facebook、ig上，針對特定用戶，如何在眾多用戶中找出適合推薦加好友的對象。
                    </Li>
                </Ol>
            </Paragraph>

            <Paragraph>
                <H3>比較演算法的兩個標準：</H3>
                <Ol>
                    <Li>執行得比較快。</Li>
                    <Li>使用的資源比較少。</Li>
                </Ol>
                <Text>
                    使用計時的方式，來判斷演算法的運作時間(效率)是不實際的，因為同一台電腦在處理同一個任務時，仍有可能會得出不同的執行時間；不同的電腦處理同一個任務，也會有不同的執行時間。
                </Text>
                <Text>比較好的方式是去討論演算法的複雜度(時間、空間複雜度)。</Text>
            </Paragraph>

            <Paragraph>
                <H3>複雜度 Complexity</H3>
                <Text>每個加、減、乘、除、比較的處理都被計算為 1 個運作動作。</Text>
                <Text>
                    複雜度即是指，針對一個輸入值，演算法需要經過「多少個運作動作」，才能完成計算任務。
                </Text>
                <Text>
                    使用 f(n) 來表示輸入值(input size n)與複雜度(complexity f(n))的相應關係。
                </Text>

                <CodeWrapper>
                    <Code>
                        function fn1&#40;n&#41; &#123; <br />
                        &ensp; let sum = 0 <br />
                        &ensp; for &#40;let i = 0; i &lt; n; i++&#41; &#123; <br />
                        &ensp; &ensp; sum += n <br />
                        &ensp; &#125; <br />
                        &ensp; return sum <br />
                        &#125; <br />
                        <br />
                        function fn2&#40;n&#41; &#123; <br />
                        &ensp; if &#40;n === 1&#41; return 1 <br />
                        &ensp; return &#40;&#40;1 + n&#41; * n&#41; / 2 <br />
                        &#125;
                    </Code>
                </CodeWrapper>
                <Text>
                    fn1：每一輪共要執行 (i &lt;= n)、(i++)、(sum += i)，3個動作，n 輪，共 3 * n
                    個動作。
                </Text>
                <Text>fn2：執行 (1 + n)、再 * n、再 / 2，共 3 個動作。</Text>
                <Text>
                    當 n 值很小時，兩個演算法基本上沒有什麼差異；但是當 n 值很大時，fn1 與 fn2
                    的值就會差很大。
                </Text>
                <Image src="/images/algorithm/index/001.jpg" width={500} height={500} alt="" />
            </Paragraph>
        </Layout>
    )
}

export default Algorithm

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
