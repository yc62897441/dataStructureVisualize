import styled from 'styled-components'
import Image from 'next/image.js'

import Layout from '../../components/Layout.jsx'
import {
    H1,
    H3,
    Paragraph,
    Text,
    Ol,
    Li,
    CodeWrapper,
    Code,
} from '../../components/content/Content.jsx'

function BigO() {
    return (
        <Layout>
            <H1>Big O</H1>

            <Paragraph>
                <H3>Big O Notation</H3>
                <Text>
                    Big O 是一個工具，用來描述一個特定的輸入值或是無限大的值時，function
                    的極限行為(limiting behavior 微積分概念)。白話來說，當 input size
                    不斷放大時，function(n) 的走向趨勢為何? 或者是，展示出在最壞情況下(worst case
                    scenario)，演算法的走向趨勢(general trands of complexity)。
                </Text>
            </Paragraph>

            <Paragraph>
                <H3>計算 Big O 的原則：</H3>
                <Ol>
                    <Li>Constant dosen’t matter. 常數項不重要。</Li>
                    <Li>Small Terms don’t matter. 例如多項式中，項次較小者不重要。</Li>
                    <Li>Logarithm Base doesn’t matter. Log 的底數不重要。 </Li>
                </Ol>
                <Text>
                    計算 Big O 的例子 1。假設f(n) = 5，因為最大項是常數且常數項不重要，所以轉換為
                    f(n) = 1，Big O 即為 O(1)。
                </Text>
                <Text>
                    計算 Big O 的例子 2。假設f(n) = 3n^2 + 5n + 7，因為常數項不重要，所以轉換為 f(n)
                    = n^2 + n + 1，因為項次較小者不重要，所以轉換為 f(n) = n^2，Big O 即為 O(n^2)。
                </Text>
                <Text>
                    計算 Big O 的例子 3。假設f(n) = log2 n，因為底數不重要，所以轉換為 f(n) = log
                    n，Big O 即為 O(log n)。
                </Text>
                <Text>
                    為何較小項不重要。因為當 n 為極大值(worst case
                    scenario)，演算法所需要的費時(運行次數)受到最高項次的影響最大，而較小項的影響幾乎無異。因此，當輸入項夠大的情況下，可以忽略最大項次以外的其他項次。
                </Text>
            </Paragraph>

            <Paragraph>
                <H3>演算法中常見的 Big O 類型：</H3>
                <Ol>
                    <Li>O(n) 常數時間</Li>
                    <Li>O(log n) 對數時間</Li>
                    <Li>O(√n) </Li>
                    <Li>O(n) 線性時間</Li>
                    <Li>O(n * log n) 線性乘對數時間</Li>
                    <Li>O(n ^ 2) 次方時間</Li>
                    <Li>O(2 ^ n) 指數時間</Li>
                    <Li>O(n!) 階乘時間</Li>
                </Ol>
                <Image src="/images/algorithm/BigO/001.jpg" width={1143} height={695} alt="" />
            </Paragraph>

            <Paragraph>
                <H3>Big O Notation 正式定義</H3>
                <Text>
                    Big O 定義：function f(n) ∈(可以記作 = ) O(g(n)) if and only if 存在一個數 C 與
                    n0，使得 0 &lt;= f(n) &lt;= C * g(n)，對於所有的 n 來說，n &gt;= n0。
                </Text>
                <Text>
                    例如 f(n) = 3n + 6，C = 7，g(n) = n，C * g(n) = 7n。在 n 為 1.5 以上的情況，C *
                    g(n) 永遠會 &gt;= f(n)。此時 n0 = 1.5，對於所有 &gt;= n0 的 n 來說，C * g(n)
                    永遠會 &gt;= f(n)，f(n) = O(g(n)) = O(n)。
                </Text>
                <Image src="/images/algorithm/BigO/002.jpg" width={1140} height={343} alt="" />
                <Text>
                    既然給一個常數項的倍數後，可以保證在 n0 以後，g(n) 永遠 &gt;= f(n)，則代表g(n)
                    的 O(n) 是 &gt;= f(n) 的 O(n)，因為如果 f(n) 的 Big O 是 n，g(n) 的 Big O 是
                    n^2，則不可能這樣保證在 n0 以後g(n) 永遠 &gt;= f(n)。注意，只說是 O(n)
                    相同，沒說兩個函數完全相同。
                </Text>
                <Text>
                    承上例子，如果 f(n) = 3n + 6，C = 1，g(n) = n ^ 2，則 f(n) = O(g(n)) = O(n ^
                    2)。綜合兩例，f(n) = 3n + 6 可以為 O(n) 也可以為 O(n ^
                    2)，在這種狀況下，應該要選擇最小的 Big O。
                </Text>
                <Text>C * g(n) 定義了 f(n) 的 upper bound。</Text>
            </Paragraph>

            <Paragraph>
                <H3>Big Omega Ω(n)</H3>
                <Text>
                    Big Omega 定義了演算法的
                    lowerbound，即使不斷改善一個演算法，它還是有最終最好的限制。
                </Text>
                <Text>
                    定義：f(n) = Ω(g(n)) iff 存在實數(real number) C n0，使得 f(n) &gt;= C * g(n)
                    &gt;= 0，對於所有 n &gt;= n0。
                </Text>
                <Text></Text>
                <Text></Text>
            </Paragraph>

            <Paragraph>
                <H3>Big Theta θ(n)</H3>
                <Text>Big Theta 定義了演算法的 upperbound 與 lowerbound。</Text>
                <Text>
                    定義：f(n) = θ(g(n)) iff 存在實數(positive real number) C1 C2 n0，使得 0 &lt;=
                    C1 * g(n) &lt;= f(n) &lt;= C2 * g(n)
                </Text>
                <Text>
                    例如：C1 = 2, C2 = 5，n0 = 7.5，則在 n &gt;= n0 時，f(n) 永遠夾在 C1 * g(n) 與
                    C2 * g(n) 之間。
                </Text>
                <Image src="/images/algorithm/BigO/003.jpg" width={1126} height={397} alt="" />
            </Paragraph>

            <Paragraph>
                <H3>Big O in Arrays and Objects 操作陣列與物件時的 Big O</H3>
                <Text>
                    了解 javascript 原生處理
                    array、object，新增insertion、刪除removal、搜尋searching、存取access的演算法的
                    Big O notation。
                </Text>
                <br />

                <Text>Objects</Text>
                <Text>
                    搜尋searching 要把每一個 key 對應的 value 都拿來看一看是否符合搜尋標的，所以是
                    O(n)。
                </Text>
                <Text>
                    新增、刪除、存取，因為資料結構是 Hash Table，所以不管 object 裡面的 keys
                    是多是少，都不影響 Big O notation。
                </Text>
                <Ol>
                    <Li>insertion O(1)</Li>
                    <Li>removal O(1)</Li>
                    <Li>searching O(n)</Li>
                    <Li>access O(1)</Li>
                </Ol>
                <br />

                <Text>Arrays</Text>
                <Text>
                    Accessing 也是因為資料結構是採用 Hash Table 的關係，所以不管 array
                    內的資料多寡，都不影響 Big O。
                </Text>
                <Text>
                    unshift 要把每一筆資料的 index 都往後推 1 位，所以是 O(n)；同理 shift
                    也是如此，要把每一筆資料的 index 都往前移 1 位。
                </Text>
                <Ol>
                    <Li>insertion push O(1)</Li>
                    <Li>insertion unshift O(n)</Li>
                    <Li>removal pop O(1)</Li>
                    <Li>removal shift O(n)</Li>
                    <Li>searching O(n)</Li>
                    <Li>access O(1)</Li>
                </Ol>
                <Text>
                    例如以下雖然看似只有一層 for loop，但因為 unshift 本身的複雜度就是
                    O(n)，所以整個演算法的複雜度其實是 O(n^2)。要特別注意。
                </Text>
                <CodeWrapper>
                    <Code>
                        for &#40;let i = 0; i &lt; n ;i++&#41; &#123; <br />
                        &ensp; arr.unshift&#40;value&#41; <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>
        </Layout>
    )
}

export default BigO

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
