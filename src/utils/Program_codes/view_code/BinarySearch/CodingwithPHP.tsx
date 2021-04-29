import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4" style={{marginTop: '177px'}}>Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Recursive</b> implementation of Binary Search</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="plain">&lt;?php </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; PHP program to implement </code></div>
                  <div className="line number3 index2 alt2"><code className="comments">&#47;&#47; recursive Binary Search </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="comments">&#47;&#47; A recursive binary search </code></div>
                  <div className="line number6 index5 alt1"><code className="comments">&#47;&#47; function. It returns location </code></div>
                  <div className="line number7 index6 alt2"><code className="comments">&#47;&#47; of x in given array arr[l..r]&nbsp; </code></div>
                  <div className="line number8 index7 alt1"><code className="comments">&#47;&#47; is present, otherwise -1 </code></div>
                  <div className="line number9 index8 alt2"><code className="keyword">function</code> <code className="plain">binarySearch(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$l</code><code className="plain">, </code><code className="variable">$r</code><code className="plain">, </code><code className="variable">$x</code><code className="plain">) </code></div>
                  <div className="line number10 index9 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number11 index10 alt2"><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$r</code> <code className="plain">&gt;= </code><code className="variable">$l</code><code className="plain">) </code></div>
                  <div className="line number12 index11 alt1"><code className="plain">&#123; </code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$mid</code> <code className="plain">= </code><code className="functions">ceil</code><code className="plain">(</code><code className="variable">$l</code> <code className="plain">+ (</code><code className="variable">$r</code> <code className="plain">- </code><code className="variable">$l</code><code className="plain">) / 2); </code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If the element is present&nbsp; </code></div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; at the middle itself </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$mid</code><code className="plain">] == </code><code className="variable">$x</code><code className="plain">)&nbsp; </code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="functions">floor</code><code className="plain">(</code><code className="variable">$mid</code><code className="plain">); </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If element is smaller than&nbsp; </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; mid, then it can only be&nbsp; </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; present in left subarray </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$mid</code><code className="plain">] &gt; </code><code className="variable">$x</code><code className="plain">)&nbsp; </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">binarySearch(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$l</code><code className="plain">,&nbsp; </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$mid</code> <code className="plain">- 1, </code><code className="variable">$x</code><code className="plain">); </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Else the element can only&nbsp; </code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; be present in right subarray </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">binarySearch(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$mid</code> <code className="plain">+ 1,&nbsp; </code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$r</code><code className="plain">, </code><code className="variable">$x</code><code className="plain">); </code></div>
                  <div className="line number31 index30 alt2"><code className="plain">&#125; </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number33 index32 alt2"><code className="comments">&#47;&#47; We reach here when element&nbsp; </code></div>
                  <div className="line number34 index33 alt1"><code className="comments">&#47;&#47; is not present in array </code></div>
                  <div className="line number35 index34 alt2"><code className="keyword">return</code> <code className="plain">-1; </code></div>
                  <div className="line number36 index35 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number38 index37 alt1"><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number39 index38 alt2"><code className="variable">$arr</code> <code className="plain">= </code><code className="keyword">array</code><code className="plain">(2, 3, 4, 10, 40); </code></div>
                  <div className="line number40 index39 alt1"><code className="variable">$n</code> <code className="plain">= </code><code className="functions">count</code><code className="plain">(</code><code className="variable">$arr</code><code className="plain">); </code></div>
                  <div className="line number41 index40 alt2"><code className="variable">$x</code> <code className="plain">= 10; </code></div>
                  <div className="line number42 index41 alt1"><code className="variable">$result</code> <code className="plain">= binarySearch(</code><code className="variable">$arr</code><code className="plain">, 0, </code><code className="variable">$n</code> <code className="plain">- 1, </code><code className="variable">$x</code><code className="plain">); </code></div>
                  <div className="line number43 index42 alt2"><code className="keyword">if</code><code className="plain">((</code><code className="variable">$result</code> <code className="plain">== -1)) </code></div>
                  <div className="line number44 index43 alt1"><code className="functions">echo</code> <code className="string">"Element is not present in array"</code><code className="plain">; </code></div>
                  <div className="line number45 index44 alt2"><code className="keyword">else</code></div>
                  <div className="line number46 index45 alt1"><code className="functions">echo</code> <code className="string">"Element is present at index "</code><code className="plain">, </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$result</code><code className="plain">; </code></div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
            
            <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Iterative </b> implementation of Binary Search</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="plain">&lt;?php </code></div>
                  <div className="line number2 index1 alt1"><code className="comments">&#47;&#47; PHP program to implement </code></div>
                  <div className="line number3 index2 alt2"><code className="comments">&#47;&#47; iterative Binary Search </code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="comments">&#47;&#47; A iterative binary search&nbsp; </code></div>
                  <div className="line number6 index5 alt1"><code className="comments">&#47;&#47; function. It returns location&nbsp; </code></div>
                  <div className="line number7 index6 alt2"><code className="comments">&#47;&#47; of x in given array arr[l..r]&nbsp; </code></div>
                  <div className="line number8 index7 alt1"><code className="comments">&#47;&#47; if present, otherwise -1 </code></div>
                  <div className="line number9 index8 alt2"><code className="keyword">function</code> <code className="plain">binarySearch(</code><code className="variable">$arr</code><code className="plain">, </code><code className="variable">$l</code><code className="plain">,&nbsp; </code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$r</code><code className="plain">, </code><code className="variable">$x</code><code className="plain">) </code></div>
                  <div className="line number11 index10 alt2"><code className="plain">&#123; </code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(</code><code className="variable">$l</code> <code className="plain">&lt;= </code><code className="variable">$r</code><code className="plain">) </code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$m</code> <code className="plain">= </code><code className="variable">$l</code> <code className="plain">+ (</code><code className="variable">$r</code> <code className="plain">- </code><code className="variable">$l</code><code className="plain">) / 2; </code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Check if x is present at mid </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$m</code><code className="plain">] == </code><code className="variable">$x</code><code className="plain">) </code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="functions">floor</code><code className="plain">(</code><code className="variable">$m</code><code className="plain">); </code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If x greater, ignore </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; left half </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(</code><code className="variable">$arr</code><code className="plain">[</code><code className="variable">$m</code><code className="plain">] &lt; </code><code className="variable">$x</code><code className="plain">) </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$l</code> <code className="plain">= </code><code className="variable">$m</code> <code className="plain">+ 1; </code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If x is smaller,&nbsp; </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; ignore right half </code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$r</code> <code className="plain">= </code><code className="variable">$m</code> <code className="plain">- 1; </code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; if we reach here, then&nbsp; </code></div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; element was not present </code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">-1; </code></div>
                  <div className="line number34 index33 alt1"><code className="plain">&#125; </code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number36 index35 alt1"><code className="comments">&#47;&#47; Driver Code </code></div>
                  <div className="line number37 index36 alt2"><code className="variable">$arr</code> <code className="plain">= </code><code className="keyword">array</code><code className="plain">(2, 3, 4, 10, 40); </code></div>
                  <div className="line number38 index37 alt1"><code className="variable">$n</code> <code className="plain">= </code><code className="functions">count</code><code className="plain">(</code><code className="variable">$arr</code><code className="plain">); </code></div>
                  <div className="line number39 index38 alt2"><code className="variable">$x</code> <code className="plain">= 10; </code></div>
                  <div className="line number40 index39 alt1"><code className="variable">$result</code> <code className="plain">= binarySearch(</code><code className="variable">$arr</code><code className="plain">, 0,&nbsp; </code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$n</code> <code className="plain">- 1, </code><code className="variable">$x</code><code className="plain">); </code></div>
                  <div className="line number42 index41 alt1"><code className="keyword">if</code><code className="plain">((</code><code className="variable">$result</code> <code className="plain">== -1)) </code></div>
                  <div className="line number43 index42 alt2"><code className="functions">echo</code> <code className="string">"Element is not present in array"</code><code className="plain">; </code></div>
                  <div className="line number44 index43 alt1"><code className="keyword">else</code></div>
                  <div className="line number45 index44 alt2"><code className="functions">echo</code> <code className="string">"Element is present at index "</code><code className="plain">,&nbsp; </code></div>
                  <div className="line number46 index45 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="variable">$result</code><code className="plain">; </code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);