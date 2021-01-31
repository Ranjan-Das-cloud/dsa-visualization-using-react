import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="plain">&lt;?php&nbsp; </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; PHP program for insertion sort </code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number4 index3 alt1 highlighted"><code className="comments">&#47;&#47; Function to sort an array </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="comments">&#47;&#47; using insertion sort </code></div>
                  <div className="line number6 index5 alt1 highlighted"><code className="keyword">function</code> <code className="plain">insertionSort(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">) </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="plain">&#123; </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= 1; </code><code className="variable">$i</code> <code className="plain">&lt; </code><code className="variable">$n</code><code className="plain">; </code><code className="variable">$i</code><code className="plain">++) </code></div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$key</code> <code className="plain">= </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">]; </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$j</code> <code className="plain">= </code><code className="variable">$i</code><code className="plain">-1; </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Move elements of arr[0..i-1], </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; that are&nbsp;&nbsp;&nbsp; greater than key, to&nbsp; </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; one position ahead of their&nbsp; </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; current position </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(</code><code className="variable">$j</code> <code className="plain">&gt;= 0 &amp;&amp; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code><code className="plain">] &gt; </code><code className="variable">$key</code><code className="plain">) </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code> <code className="plain">+ 1] = </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code><code className="plain">]; </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$j</code> <code className="plain">= </code><code className="variable">$j</code> <code className="plain">- 1; </code></div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code> <code className="plain">+ 1] = </code><code className="variable">$key</code><code className="plain">; </code></div>
                  <div className="line number24 index23 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="plain">&#125; </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number27 index26 alt2"><code className="comments">&#47;&#47; A utility function to </code></div>
                  <div className="line number28 index27 alt1"><code className="comments">&#47;&#47; print an array of size n </code></div>
                  <div className="line number29 index28 alt2"><code className="keyword">function</code> <code className="plain">printArray(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">) </code></div>
                  <div className="line number30 index29 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= 0; </code><code className="variable">$i</code> <code className="plain">&lt; </code><code className="variable">$n</code><code className="plain">; </code><code className="variable">$i</code><code className="plain">++) </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">echo</code> <code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">].</code><code className="string">" "</code><code className="plain">; </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">echo</code> <code className="string">"\n"</code><code className="plain">; </code></div>
                  <div className="line number34 index33 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number36 index35 alt1"><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number37 index36 alt2"><code className="variable">$arr</code> <code className="plain">= </code><code className="keyword">array</code><code className="plain">(12, 11, 13, 5, 6); </code></div>
                  <div className="line number38 index37 alt1"><code className="variable">$n</code> <code className="plain">= sizeof(</code><code className="variable">$arr</code><code className="plain">); </code></div>
                  <div className="line number39 index38 alt2"><code className="plain">insertionSort(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">); </code></div>
                  <div className="line number40 index39 alt1"><code className="plain">printArray(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">); </code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Recursive </b>Implementation of Insertion Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="plain">&lt;?php&nbsp; </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; Recursive PHP program for insertion sort </code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number4 index3 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Recursive function to sort an </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; array using insertion sort </code></div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">function</code> <code className="plain">insertionSortRecursive(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">) </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Base case </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$n</code> <code className="plain">&lt;= 1) </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code><code className="plain">; </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Sort first n-1 elements </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">insertionSortRecursive(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code> <code className="plain">- 1); </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Insert last element at its correct&nbsp; </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; position in sorted array. </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$last</code> <code className="plain">= </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$n</code> <code className="plain">- 1]; </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$j</code> <code className="plain">= </code><code className="variable">$n</code> <code className="plain">- 2; </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Move elements of arr[0..i-1], that are </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; greater than key, to one position ahead </code></div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; of their current position&nbsp; </code></div>
                  <div className="line number24 index23 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(</code><code className="variable">$j</code> <code className="plain">&gt;= 0 &amp;&amp; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code><code className="plain">] &gt; </code><code className="variable">$last</code><code className="plain">) </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number26 index25 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code> <code className="plain">+ 1] = </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code><code className="plain">]; </code></div>
                  <div className="line number27 index26 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$j</code><code className="plain">--; </code></div>
                  <div className="line number28 index27 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number29 index28 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$j</code> <code className="plain">+ 1] = </code><code className="variable">$last</code><code className="plain">; </code></div>
                  <div className="line number30 index29 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; A utility function to&nbsp; </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; print an array of size n </code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">function</code> <code className="plain">printArray(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">) </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= 0; </code><code className="variable">$i</code> <code className="plain">&lt; </code><code className="variable">$n</code><code className="plain">; </code><code className="variable">$i</code><code className="plain">++) </code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">echo</code> <code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">].</code><code className="string">" "</code><code className="plain">; </code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number40 index39 alt1"><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number41 index40 alt2"><code className="variable">$arr</code> <code className="plain">= </code><code className="keyword">array</code><code className="plain">(12, 11, 13, 5, 6); </code></div>
                  <div className="line number42 index41 alt1"><code className="variable">$n</code> <code className="plain">= sizeof(</code><code className="variable">$arr</code><code className="plain">); </code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number44 index43 alt1"><code className="plain">insertionSortRecursive(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">); </code></div>
                  <div className="line number45 index44 alt2"><code className="plain">printArray(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">); </code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);