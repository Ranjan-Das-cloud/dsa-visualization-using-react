import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageH6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Heap Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="plain">&lt;?php</code></div>
                  <div className="line number2 index1 alt1">&nbsp;</div>
                  <div className="line number3 index2 alt2"><code className="comments">&#47;&#47; Php program for implementation of Heap Sort</code></div>
                  <div className="line number4 index3 alt1">&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="comments">&#47;&#47; To heapify a subtree rooted with node i which is</code></div>
                  <div className="line number6 index5 alt1"><code className="comments">&#47;&#47; an index in arr[]. n is size of heap</code></div>
                  <div className="line number7 index6 alt2"><code className="keyword">function</code> <code className="plain">heapify(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">, </code><code className="variable">$i</code><code className="plain">)</code></div>
                  <div className="line number8 index7 alt1"><code className="plain">&#123;</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$largest</code> <code className="plain">= </code><code className="variable">$i</code><code className="plain">; </code><code className="comments">&#47;&#47; Initialize largest as root</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$l</code> <code className="plain">= 2*</code><code className="variable">$i</code> <code className="plain">+ 1; </code><code className="comments">&#47;&#47; left = 2*i + 1</code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$r</code> <code className="plain">= 2*</code><code className="variable">$i</code> <code className="plain">+ 2; </code><code className="comments">&#47;&#47; right = 2*i + 2</code></div>
                  <div className="line number12 index11 alt1">&nbsp;</div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If left child is larger than root</code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$l</code> <code className="plain">&lt; </code><code className="variable">$n</code> <code className="plain">&amp;&amp; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$l</code><code className="plain">] &gt; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$largest</code><code className="plain">])</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$largest</code> <code className="plain">= </code><code className="variable">$l</code><code className="plain">;</code></div>
                  <div className="line number16 index15 alt1">&nbsp;</div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If right child is larger than largest so far</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$r</code> <code className="plain">&lt; </code><code className="variable">$n</code> <code className="plain">&amp;&amp; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$r</code><code className="plain">] &gt; </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$largest</code><code className="plain">])</code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$largest</code> <code className="plain">= </code><code className="variable">$r</code><code className="plain">;</code></div>
                  <div className="line number20 index19 alt1">&nbsp;</div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If largest is not root</code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$largest</code> <code className="plain">!= </code><code className="variable">$i</code><code className="plain">)</code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;</code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$swap</code> <code className="plain">= </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">];</code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">] = </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$largest</code><code className="plain">];</code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$largest</code><code className="plain">] = </code><code className="variable">$swap</code><code className="plain">;</code></div>
                  <div className="line number27 index26 alt2">&nbsp;</div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Recursively heapify the affected sub-tree</code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">, </code><code className="variable">$largest</code><code className="plain">);</code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number31 index30 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number32 index31 alt1">&nbsp;</div>
                  <div className="line number33 index32 alt2"><code className="comments">&#47;&#47; main function to do heap sort</code></div>
                  <div className="line number34 index33 alt1"><code className="keyword">function</code> <code className="plain">heapSort(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">)</code></div>
                  <div className="line number35 index34 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Build heap (rearrange array)</code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= </code><code className="variable">$n</code> <code className="plain">/ 2 - 1; </code><code className="variable">$i</code> <code className="plain">&gt;= 0; </code><code className="variable">$i</code><code className="plain">--)</code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">, </code><code className="variable">$i</code><code className="plain">);</code></div>
                  <div className="line number39 index38 alt2">&nbsp;</div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; One by one extract an element from heap</code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= </code><code className="variable">$n</code><code className="plain">-1; </code><code className="variable">$i</code> <code className="plain">&gt; 0; </code><code className="variable">$i</code><code className="plain">--)</code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123;</code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Move current root to end</code></div>
                  <div className="line number44 index43 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$temp</code> <code className="plain">= </code><code className="variable">$arr</code><code className="plain">[0];</code></div>
                  <div className="line number45 index44 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[0] = </code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">];</code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">] = </code><code className="variable">$temp</code><code className="plain">;</code></div>
                  <div className="line number47 index46 alt2">&nbsp;</div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; call max heapify on the reduced heap</code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapify(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$i</code><code className="plain">, 0);</code></div>
                  <div className="line number50 index49 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125;</code></div>
                  <div className="line number51 index50 alt2"><code className="plain">&#125;</code></div>
                  <div className="line number52 index51 alt1">&nbsp;</div>
                  <div className="line number53 index52 alt2"><code className="comments">/* A utility function to print array of size n */</code></div>
                  <div className="line number54 index53 alt1"><code className="keyword">function</code> <code className="plain">printArray(&amp;</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">)</code></div>
                  <div className="line number55 index54 alt2"><code className="plain">&#123;</code></div>
                  <div className="line number56 index55 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="variable">$i</code> <code className="plain">= 0; </code><code className="variable">$i</code> <code className="plain">&lt; </code><code className="variable">$n</code><code className="plain">; ++</code><code className="variable">$i</code><code className="plain">)</code></div>
                  <div className="line number57 index56 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">echo</code> <code className="plain">(</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$i</code><code className="plain">].</code><code className="string">" "</code><code className="plain">) ; </code></div>
                  <div className="line number58 index57 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number59 index58 alt2"><code className="plain">&#125; </code></div>
                  <div className="line number60 index59 alt1">&nbsp;</div>
                  <div className="line number61 index60 alt2"><code className="comments">&#47;&#47; Driver program</code></div>
                  <div className="line number62 index61 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$arr</code> <code className="plain">= </code><code className="keyword">array</code><code className="plain">(12, 11, 13, 5, 6, 7);</code></div>
                  <div className="line number63 index62 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$n</code> <code className="plain">= sizeof(</code><code className="variable">$arr</code><code className="plain">)/sizeof(</code><code className="variable">$arr</code><code className="plain">[0]);</code></div>
                  <div className="line number64 index63 alt1">&nbsp;</div>
                  <div className="line number65 index64 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">heapSort(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$n</code><code className="plain">);</code></div>
                  <div className="line number66 index65 alt1">&nbsp;</div>
                  <div className="line number67 index66 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">echo</code> <code className="string">'Sorted array is '</code> <code className="plain">. </code><code className="string">"\n"</code><code className="plain">;</code></div>
                  <div className="line number68 index67 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number69 index68 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(</code><code className="variable">$arr</code> <code className="plain">, </code><code className="variable">$n</code><code className="plain">);</code></div>
                  <div className="line number70 index69 alt1">&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);