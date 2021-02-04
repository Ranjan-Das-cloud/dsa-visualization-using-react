import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Merge Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of MergeSort</code></div>
                  <div className="line number2 index1 alt1"><code className="keyword">def</code> <code className="plain">mergeSort(arr):</code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="functions">len</code><code className="plain">(arr) &gt; </code><code className="value">1</code><code className="plain">:</code></div>
                  <div className="line number4 index3 alt1">&nbsp;</div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Finding the mid of the array</code></div>
                  <div className="line number6 index5 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mid </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr)</code><code className="keyword">/</code><code className="keyword">/</code><code className="value">2</code></div>
                  <div className="line number7 index6 alt2">&nbsp;</div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Dividing the array elements</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">L </code><code className="keyword">=</code> <code className="plain">arr[:mid]</code></div>
                  <div className="line number10 index9 alt1">&nbsp;</div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># into 2 halves</code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">R </code><code className="keyword">=</code> <code className="plain">arr[mid:]</code></div>
                  <div className="line number13 index12 alt2">&nbsp;</div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Sorting the first half</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(L)</code></div>
                  <div className="line number16 index15 alt1">&nbsp;</div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Sorting the second half</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(R)</code></div>
                  <div className="line number19 index18 alt2">&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i </code><code className="keyword">=</code> <code className="plain">j </code><code className="keyword">=</code> <code className="plain">k </code><code className="keyword">=</code> <code className="value">0</code></div>
                  <div className="line number21 index20 alt2">&nbsp;</div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Copy data to temp arrays L[] and R[]</code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">i &lt; </code><code className="functions">len</code><code className="plain">(L) </code><code className="keyword">and</code> <code className="plain">j &lt; </code><code className="functions">len</code><code className="plain">(R):</code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">L[i] &lt; R[j]:</code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] </code><code className="keyword">=</code> <code className="plain">L[i]</code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code><code className="plain">:</code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] </code><code className="keyword">=</code> <code className="plain">R[j]</code></div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number31 index30 alt2">&nbsp;</div>
                  <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Checking if any element was left</code></div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">i &lt; </code><code className="functions">len</code><code className="plain">(L):</code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] </code><code className="keyword">=</code> <code className="plain">L[i]</code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number37 index36 alt2">&nbsp;</div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">j &lt; </code><code className="functions">len</code><code className="plain">(R):</code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[k] </code><code className="keyword">=</code> <code className="plain">R[j]</code></div>
                  <div className="line number40 index39 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">k </code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number42 index41 alt1">&nbsp;</div>
                  <div className="line number43 index42 alt2"><code className="comments"># Code to print the list</code></div>
                  <div className="line number44 index43 alt1">&nbsp;</div>
                  <div className="line number45 index44 alt2">&nbsp;</div>
                  <div className="line number46 index45 alt1"><code className="keyword">def</code> <code className="plain">printList(arr):</code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="functions">len</code><code className="plain">(arr)):</code></div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">print</code><code className="plain">(arr[i], end</code><code className="keyword">=</code><code className="string">" "</code><code className="plain">)</code></div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">()</code></div>
                  <div className="line number50 index49 alt1">&nbsp;</div>
                  <div className="line number51 index50 alt2">&nbsp;</div>
                  <div className="line number52 index51 alt1"><code className="comments"># Driver Code</code></div>
                  <div className="line number53 index52 alt2"><code className="keyword">if</code> <code className="plain">__name__ </code><code className="keyword">=</code><code className="keyword">=</code> <code className="string">'__main__'</code><code className="plain">:</code></div>
                  <div className="line number54 index53 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">12</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">13</code><code className="plain">, </code><code className="value">5</code><code className="plain">, </code><code className="value">6</code><code className="plain">, </code><code className="value">7</code><code className="plain">]</code></div>
                  <div className="line number55 index54 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code><code className="plain">(</code><code className="string">"Given array is"</code><code className="plain">, end</code><code className="keyword">=</code><code className="string">"\n"</code><code className="plain">)</code></div>
                  <div className="line number56 index55 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printList(arr)</code></div>
                  <div className="line number57 index56 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mergeSort(arr)</code></div>
                  <div className="line number58 index57 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">print</code><code className="plain">(</code><code className="string">"Sorted array is: "</code><code className="plain">, end</code><code className="keyword">=</code><code className="string">"\n"</code><code className="plain">)</code></div>
                  <div className="line number59 index58 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printList(arr)</code></div>
                  <div className="line number60 index59 alt1">&nbsp;</div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Iterative </b>Implementation of Merge Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Recursive Python Program for merge sort</code></div>
                  <div className="line number2 index1 alt1">&nbsp;</div>
                  <div className="line number3 index2 alt2"><code className="keyword">def</code> <code className="plain">merge(left, right):</code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="keyword">not</code> <code className="functions">len</code><code className="plain">(left) </code><code className="keyword">or</code> <code className="keyword">not</code> <code className="functions">len</code><code className="plain">(right):</code></div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">left </code><code className="keyword">or</code> <code className="plain">right</code></div>
                  <div className="line number6 index5 alt1">&nbsp;</div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result </code><code className="keyword">=</code> <code className="plain">[]</code></div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i, j </code><code className="keyword">=</code> <code className="value">0</code><code className="plain">, </code><code className="value">0</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">(</code><code className="functions">len</code><code className="plain">(result) &lt; </code><code className="functions">len</code><code className="plain">(left) </code><code className="keyword">+</code> <code className="functions">len</code><code className="plain">(right)):</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">left[i] &lt; right[j]:</code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result.append(left[i])</code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i</code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code><code className="plain">:</code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result.append(right[j])</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">j</code><code className="keyword">+</code><code className="keyword">=</code> <code className="value">1</code></div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">i </code><code className="keyword">=</code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(left) </code><code className="keyword">or</code> <code className="plain">j </code><code className="keyword">=</code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(right):</code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">result.extend(left[i:] </code><code className="keyword">or</code> <code className="plain">right[j:])</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">break</code></div>
                  <div className="line number19 index18 alt2">&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">result</code></div>
                  <div className="line number21 index20 alt2">&nbsp;</div>
                  <div className="line number22 index21 alt1"><code className="keyword">def</code> <code className="plain">mergesort(</code><code className="functions">list</code><code className="plain">):</code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="functions">len</code><code className="plain">(</code><code className="functions">list</code><code className="plain">) &lt; </code><code className="value">2</code><code className="plain">:</code></div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="functions">list</code></div>
                  <div className="line number25 index24 alt2">&nbsp;</div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">middle </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(</code><code className="functions">list</code><code className="plain">)</code><code className="keyword">/</code><code className="value">2</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">left </code><code className="keyword">=</code> <code className="plain">mergesort(</code><code className="functions">list</code><code className="plain">[:middle])</code></div>
                  <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">right </code><code className="keyword">=</code> <code className="plain">mergesort(</code><code className="functions">list</code><code className="plain">[middle:])</code></div>
                  <div className="line number29 index28 alt2">&nbsp;</div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">merge(left, right)</code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number32 index31 alt1"><code className="plain">seq </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">12</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">13</code><code className="plain">, </code><code className="value">5</code><code className="plain">, </code><code className="value">6</code><code className="plain">, </code><code className="value">7</code><code className="plain">]</code></div>
                  <div className="line number33 index32 alt2"><code className="keyword">print</code><code className="plain">(</code><code className="string">"Given array is"</code><code className="plain">)</code></div>
                  <div className="line number34 index33 alt1"><code className="functions">print</code><code className="plain">(seq); </code></div>
                  <div className="line number35 index34 alt2"><code className="keyword">print</code><code className="plain">(</code><code className="string">"\n"</code><code className="plain">)</code></div>
                  <div className="line number36 index35 alt1"><code className="keyword">print</code><code className="plain">(</code><code className="string">"Sorted array is"</code><code className="plain">)</code></div>
                  <div className="line number37 index36 alt2"><code className="functions">print</code><code className="plain">(mergesort(seq))</code></div>
                  <div className="line number38 index37 alt1">&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);