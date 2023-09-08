import styled from 'styled-components'

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

function AlgorithmDesign() {
    return (
        <Layout>
            <H1>Algorithm Design 演算法設計概述</H1>

            <Paragraph>
                <Text>
                    把人類的邏輯思考流程，實現到演算法中。不要因為電腦有優異的計算能力，就讓電腦進行笨重的運算。
                </Text>
            </Paragraph>

            <Paragraph>
                <H3>Linear Search(Sequential Search)</H3>
                <Text>
                    是一個連續地(電腦索引按序)確認一個陣列中每一個元素，直到符合搜尋條件、找到搜尋目標或是找完整個陣列後，才會停止的演算法。
                </Text>
                <Text>
                    例如尋找陣列中是否有某個值，如果有則回傳那個值的 index，如果沒有則回傳 -1。
                </Text>
                <Ol>
                    <Li>worst case performance: O(n) 搜尋目標剛好排在陣列中最後一個位置的狀況。</Li>
                    <Li>best case performance: O(1) 搜尋目標剛好排在陣列中第一個位置的狀況。</Li>
                    <Li>average performance: O(n/2)</Li>
                </Ol>
            </Paragraph>

            <Paragraph>
                <H3>Binary Search</H3>
                <Text>
                    對於 sorted array 來說，從中去找一個值，最快速的找法不是 linear
                    search，最快的方式是一直進行對半剖析。
                </Text>
                <Text>
                    Binary Search 是一種搜尋演算法，針對從排序好的 sorted array
                    中找出特定的目標(target)。
                </Text>
                <Ol>
                    <Li>worst case performance: O(log n)</Li>
                    <Li>best case performance: O(1) 搜尋目標剛好排在陣列中正中間位置的狀況。</Li>
                    <Li>average performance: O(log n)</Li>
                </Ol>
                <CodeWrapper>
                    <Code>
                        const arr = [0, 2, 3, 5, 8, 9, 10, 11] <br />
                        const target = 8 <br />
                        <br />
                        function binarySearch&#40;arr, target&#41; &#123; <br />
                        &ensp; let min = 0 <br />
                        &ensp; let max = arr.length - 1 <br />
                        <br />
                        &ensp; while &#40;min &lt;= max&#41; &#123; <br />
                        &ensp; &ensp; let middle = Math.floor&#40;&#40;max + min&#41; / 2&#41;{' '}
                        <br />
                        <br />
                        &ensp; &ensp; if &#40;target &gt; arr[middle]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; min = middle + 1 <br />
                        &ensp; &ensp; &#125; else if &#40;target &lt; arr[middle]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; max = middle - 1 <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; return middle <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        <br />
                        &ensp; return -1 <br />
                        &#125; <br />
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Intersection Problem</H3>
                <Text>找出兩個 array 之中，有哪些 elements 是有交集的。</Text>
                <Text>
                    直覺方式是使用兩層的 for loop，去逐一比對兩個 arrays 中的每一個值是否有相同。
                </Text>
                <Text>複雜度為 O(n * m)</Text>
                <CodeWrapper>
                    <Code>
                        const arr1 = [1, 2, 4, 6, 7, 8, 9] <br />
                        const arr2 = [2, 3, 5, 6, 7, 9, 10] <br />
                        function intersection&#40;arr1, arr2&#41; &#123; <br />
                        &ensp; const result = [] <br />
                        <br />
                        &ensp; for &#40;let i = 0; i &lt; arr1.length; i++&#41; &#123; <br />
                        &ensp; &ensp; for &#40;let j = 0; j &lt; arr2.length; j++&#41; &#123; <br />
                        &ensp; &ensp; &ensp; if &#40;arr1[i] === arr2[j]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; &ensp; result.push&#40;arr1[i]&#41; <br />
                        &ensp; &ensp; &ensp; &#125; <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return result // [ 2, 6, 7, 9 ] <br />
                        &#125;
                    </Code>
                </CodeWrapper>
                <br />

                <Text>
                    利用 javascript Object 在查詢時的複雜度為 O(1) 的特性，先把第一個 arr 的存到
                    table 中，再用第二個 arr 中的值去檢索是否有存在於 table 中。
                </Text>
                <CodeWrapper>
                    <Code>
                        const arr1 = [1, 2, 4, 6, 7, 8, 9] <br />
                        const arr2 = [2, 3, 5, 6, 7, 9, 10] <br />
                        function intersection2&#40;arr1, arr2&#41; &#123; <br />
                        &ensp; const result = [] <br />
                        &ensp; const table = &#123;&#125; <br />
                        <br />
                        &ensp; for &#40;let i = 0; i &lt; arr1.length; i++&#41; &#123; <br />
                        &ensp; &ensp; const key = arr1[i] <br />
                        &ensp; &ensp; table[key] = arr1[i] <br />
                        &ensp; &#125; <br />
                        <br />
                        &ensp; for &#40;let j = 0; j &lt; arr2.length; j++&#41; &#123; <br />
                        &ensp; &ensp; const key = arr2[j] <br />
                        &ensp; &ensp; if &#40;table[key] !== undefined&#41;
                        result.push&#40;arr2[j]&#41; <br />
                        &ensp; &#125; <br />
                        <br />
                        &ensp; return result // [ 2, 6, 7, 9 ] <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Counter</H3>
                <Text>
                    Counter
                    是一種設計演算法的技巧，它並不是一個正式的名稱，在不同的地方可能有不同的名稱，但概念是一樣的。使用
                    counter object 可以減少演算法的複雜度。
                </Text>
                <Text>以處理 Intersection Problem 來看，複雜度為 O(n + m)</Text>
                <CodeWrapper>
                    <Code>
                        function intersection2&#40;arr1, arr2&#41; &#123; <br />
                        &ensp; const counter = &#123;&#125; <br />
                        &ensp; const arr3 = arr1.concat&#40;arr2&#41; <br />
                        &ensp; const result = [] <br />
                        <br />
                        &ensp; arr3.forEach&#40;&#40;item&#41; =&gt; &#123; <br />
                        &ensp; &ensp; if &#40;!counter[item]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; counter[item] = 1 <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; counter[item]++ <br />
                        &ensp; &ensp; &ensp; result.push&#40;item&#41; <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125;&#41; <br />
                        <br />
                        &ensp; return result <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Frequency</H3>
                <Text>給定兩組字串，比對這兩個字串內出現的每個字元的個數是不是一樣。</Text>
                <CodeWrapper>
                    <Code>
                        function sameFrequency&#40;str1, str2&#41; &#123; <br />
                        &ensp; if &#40;str1.length !== str2.length&#41; return false <br />
                        <br />
                        &ensp; const counter1 = buildCounter&#40;str1&#41; <br />
                        &ensp; const counter2 = buildCounter&#40;str2&#41; <br />
                        <br />
                        &ensp; for &#40;let property in counter1&#41; &#123; <br />
                        &ensp; &ensp; if &#40;counter1[property] !== counter2[property]&#41; &#123;{' '}
                        <br />
                        &ensp; &ensp; &ensp; return false <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return true <br />
                        &#125; <br />
                        <br />
                        function buildCounter&#40;str&#41; &#123; <br />
                        &ensp; const counter = &#123;&#125; <br />
                        &ensp; for &#40;let i = 0; i &lt; str.length; i++&#41; &#123; <br />
                        &ensp; &ensp; if &#40;!counter[str[i]]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; counter[str[i]] = 1 <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; counter[str[i]]++ <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return counter <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Average Pair</H3>
                <Text>
                    給定一個只有整數的 sorted array 與一個 number，從 array
                    中找出每一對數字，且這對數字的平均值等於給定的 number。
                </Text>
                <Text>以下演算法使用 table，所以不管 array 是不是排序好的，都適用。</Text>
                <CodeWrapper>
                    <Code>
                        const arr = [-11, -5, -3, -2, 0, 4, 7, 8, 9, 10, 15] // sorted <br />
                        const arr = [-11, -5, 0, 4, 7, 8, 9, 10, 15, -3, -2] // unsorted <br />
                        const average = 2 <br />
                        function averagePair&#40;arr, average&#41; &#123; <br />
                        &ensp; const table = &#123;&#125; <br />
                        &ensp; const result = [] <br />
                        <br />
                        &ensp; for &#40;let i = 0; i &lt; arr.length; i++&#41; &#123; <br />
                        &ensp; &ensp; const pairTarget = average * 2 - arr[i] <br />
                        &ensp; &ensp; if &#40;table[pairTarget] !== undefined&#41; &#123; <br />
                        &ensp; &ensp; &ensp; result.push&#40;`$&#123;arr[i]&#125; at $&#123;i&#125;,
                        $&#123;pairTarget&#125; at $&#123;table[pairTarget]&#125;`&#41; <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; table[arr[i]] = i <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return result <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Pointer</H3>
                <Text>
                    Pointer 並不是一個正式的名稱，它在不同的地方可能有不同的名稱，但概念是一樣的。
                </Text>
                <Text>
                    Pointer 是箭頭的意思，用在 sorted array 的情境。設兩個 pointer 在 array
                    的頭尾，讓兩個箭頭往內縮，直到找到縮完為止。
                </Text>
                <Text>時間複雜度是 O(n)</Text>
                <Text>一樣以處理 Average Pair 為範例。(僅適用於 sorted array)</Text>
                <CodeWrapper>
                    <Code>
                        const arr = [-11, -5, -3, -2, 0, 4, 7, 8, 9, 10, 15] // sorted <br />
                        const average = 2 <br />
                        function averagePair&#40;arr, average&#41; &#123; <br />
                        &ensp; let left = 0 <br />
                        &ensp; let right = arr.length - 1 <br />
                        &ensp; const result = [] <br />
                        <br />
                        &ensp; while &#40;left &lt; right&#41; &#123; <br />
                        &ensp; &ensp; const currentPairAverage = &#40;arr[left] + arr[right]&#41; /
                        2 <br />
                        &ensp; &ensp; if &#40;currentPairAverage &gt; average&#41; &#123; <br />
                        &ensp; &ensp; &ensp; right-- <br />
                        &ensp; &ensp; &#125; else if &#40;currentPairAverage &lt; average&#41;
                        &#123; <br />
                        &ensp; &ensp; &ensp; left++ <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; result.push&#40;`$&#123;arr[left]&#125; at
                        $&#123;left&#125;, $&#123;arr[right]&#125; at $&#123;right&#125;`&#41;{' '}
                        <br />
                        &ensp; &ensp; &ensp; right-- <br />
                        &ensp; &ensp; &ensp; left++ <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return result <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Palindrome</H3>
                <Text>一個單字從前面讀與從後面讀，字元的順序是一樣的，稱為 Palindrome。</Text>
                <Text>如果順序一樣則回傳 true，否則回傳 false，例如：</Text>
                <Ol>
                    <Li>abcdcba ---&gt; true</Li>
                    <Li>abcdeedcba ---&gt; true</Li>
                    <Li>abcdbca ---&gt; false</Li>
                </Ol>
                <Text>使用 Pointer 來實作。</Text>
                <CodeWrapper>
                    <Code>
                        function palindrome&#40;str&#41; &#123; <br />
                        &ensp; let left = 0 <br />
                        &ensp; let right = str.length - 1 <br />
                        &ensp; while &#40;left &lt;= right&#41; &#123; <br />
                        &ensp; &ensp; if &#40;str[left] === str[right]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; left++ <br />
                        &ensp; &ensp; &ensp; right-- <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; return false <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return true <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Subsequence Problem</H3>
                <Text>
                    比較兩個字串，A字串中的字母順序，是否存在於B字串中(B字串可刪除中間多於不必要的字母、空格等)。
                </Text>
                <Text>使用 Pointer 來實作。</Text>
                <CodeWrapper>
                    <Code>
                        // console.log(isSubsequenceString('book', 'my book')) // true <br />
                        // console.log(isSubsequenceString('book', 'brooklyn')) // true <br />
                        // console.log(isSubsequenceString('abc', 'acb')) // false <br />
                        function isSubsequenceString&#40;str1, str2&#41; &#123; <br />
                        &ensp; let str1Index = 0 <br />
                        &ensp; let str2Index = 0 <br />
                        &ensp; while &#40;str1Index &lt;= str1.length && str2Index &lt;=
                        str2.length&#41; &ensp; &ensp; &#123; <br />
                        &ensp; &ensp; if &#40;str1[str1Index] === str2[str2Index]&#41; &#123; <br />
                        &ensp; &ensp; &ensp; str1Index++ <br />
                        &ensp; &ensp; &ensp; str2Index++ <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; str2Index++ <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &ensp; if &#40;str1Index &gt;= str1.length&#41; &#123; <br />
                        &ensp; &ensp; &ensp; return true <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125; <br />
                        &ensp; return false <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Sliding Window</H3>
                <Text>sliding window 是一個 sub-list，跑遍整個 array。</Text>
                <Text>
                    例如從一個 array 中，找出三個數連續相加值為最大的
                    sliding-window，以及相加值為最小的 sliding window。
                </Text>
                <CodeWrapper>
                    <Code>
                        // console.log&#40;slidingWindow&#40;[2, 7, 3, 0, 12, 1, -5, -12, -11],
                        3&#41;&#41; // [ 15, -28 ] <br />
                        // console.log(slidingWindow([8, 5, 9, 3, 2, 6, 14, 6, 2, 11], 3)) // [ 26,
                        11 ] <br />
                        function slidingWindow&#40;array, number&#41; &#123; <br />
                        &ensp; if &#40;array.length &lt; number&#41; return null <br />
                        <br />
                        &ensp; // 找出起始相加的最大值、最小值 <br />
                        &ensp; let maxSum = 0 <br />
                        &ensp; let minSum = 0 <br />
                        &ensp; for &#40;let i = 0; i &lt; number; i++&#41; &#123; <br />
                        &ensp; &ensp; maxSum = maxSum + array[i] <br />
                        &ensp; &ensp; minSum = minSum + array[i] <br />
                        &ensp; &#125; <br />
                        <br />
                        &ensp; // 開始跑回圈，刪掉第一個數，加上下一個數。 <br />
                        &ensp; let tempMaxSum = maxSum <br />
                        &ensp; let tempMinSum = minSum <br />
                        &ensp; for &#40;let i = 0; i &lt;= array.length - number; i++&#41; &#123;{' '}
                        <br />
                        &ensp; &ensp; tempMaxSum = tempMaxSum - array[i] + array[i + number] <br />
                        &ensp; &ensp; tempMinSum = tempMinSum - array[i] + array[i + number] <br />
                        &ensp; &ensp; if &#40;tempMaxSum &gt; maxSum&#41; maxSum = tempMaxSum <br />
                        &ensp; &ensp; if &#40;tempMinSum &lt; minSum&#41; minSum = tempMinSum <br />
                        &ensp; &#125; <br />
                        &ensp; return [maxSum, minSum] <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>

            <Paragraph>
                <H3>Min Sub Array</H3>
                <Text>
                    在一個 Array 中找出最短的片段(sub array)，且片段中的每個值總加起來 &gt;=
                    於目標值。
                </Text>
                <CodeWrapper>
                    <Code>
                        // console.log(minSubArray2([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)) //
                        4 <br />
                        // console.log(minSubArray2([2, 3, 1, 2, 4, 3], 7)) // 2 <br />
                        // console.log(minSubArray2([1, 4, 4], 4)) // 1 <br />
                        function minSubArray2(arr, targetSum) &#123; <br />
                        &ensp; let minLength = Infinity <br />
                        &ensp; let tempMinLength = 0 <br />
                        &ensp; let tempSum = 0 <br />
                        &ensp; let index = 0 <br />
                        <br />
                        &ensp; while (index &lt; arr.length) &#123; <br />
                        &ensp; &ensp; if (tempSum &lt; targetSum) &#123; <br />
                        &ensp; &ensp; &ensp; tempSum = tempSum + arr[index] <br />
                        &ensp; &ensp; &ensp; index++ <br />
                        &ensp; &ensp; &ensp; tempMinLength++ <br />
                        &ensp; &ensp; &#125; else &#123; <br />
                        &ensp; &ensp; &ensp; if (tempMinLength &lt; minLength) minLength =
                        tempMinLength <br />
                        <br />
                        &ensp; &ensp; &ensp; &ensp; tempSum = tempSum - arr[index - tempMinLength]{' '}
                        <br />
                        &ensp; &ensp; &ensp; &ensp; tempMinLength-- <br />
                        &ensp; &ensp; &ensp; &#125; <br />
                        &ensp; &ensp; &#125; <br />
                        <br />
                        &ensp; // 遍歷完 array 後，把最後的 tempSum
                        一個一個減去其加入的值，看最小剩餘的長度為何 <br />
                        &ensp; while (tempSum &gt;= targetSum) &#123; <br />
                        &ensp; &ensp; if (tempMinLength &lt; minLength) minLength = tempMinLength{' '}
                        <br />
                        <br />
                        &ensp; &ensp; &ensp; tempSum = tempSum - arr[index - tempMinLength] <br />
                        &ensp; &ensp; &ensp; tempMinLength-- <br />
                        &ensp; &ensp; &#125; <br />
                        <br />
                        &ensp; return minLength <br />
                        &#125;
                    </Code>
                </CodeWrapper>
            </Paragraph>
        </Layout>
    )
}

export default AlgorithmDesign

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
