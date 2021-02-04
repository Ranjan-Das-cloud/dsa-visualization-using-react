import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageBu3(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
          <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Bubble Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python program for implementation of Bubble Sort </code></div>
                  <div className="line number2 index1 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number3 index2 alt2 highlighted"><code className="keyword">def</code> <code className="plain">bubbleSort(arr): </code></div>
                  <div className="line number4 index3 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">n </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(arr) </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Traverse through all array elements </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n): </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Last i elements are already in place </code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">j </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="value">0</code><code className="plain">, n</code><code className="keyword">-</code><code className="plain">i</code><code className="keyword">-</code><code className="value">1</code><code className="plain">): </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># traverse the array from 0 to n-i-1 </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Swap if the element found is greater </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># than the next element </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">arr[j] &gt; arr[j</code><code className="keyword">+</code><code className="value">1</code><code className="plain">] : </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j], arr[j</code><code className="keyword">+</code><code className="value">1</code><code className="plain">] </code><code className="keyword">=</code> <code className="plain">arr[j</code><code className="keyword">+</code><code className="value">1</code><code className="plain">], arr[j] </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number18 index17 alt1"><code className="comments"># Driver code to test above </code></div>
                  <div className="line number19 index18 alt2"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">64</code><code className="plain">, </code><code className="value">34</code><code className="plain">, </code><code className="value">25</code><code className="plain">, </code><code className="value">12</code><code className="plain">, </code><code className="value">22</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">90</code><code className="plain">] </code></div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number21 index20 alt2"><code className="plain">bubbleSort(arr) </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number23 index22 alt2"><code className="functions">print</code> <code className="plain">(</code><code className="string">"Sorted array is:"</code><code className="plain">) </code></div>
                  <div className="line number24 index23 alt1"><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(</code><code className="functions">len</code><code className="plain">(arr)): </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">(</code><code className="string">"%d"</code> <code className="keyword">%</code><code className="plain">arr[i]),&nbsp; </code></div>
                </div>
              </div>
            </h5>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}><b>Recursive </b>Implementation of Bubble Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python Program for implementation of</code></div>
                  <div className="line number2 index1 alt1"><code className="comments"># Recursive Bubble sort</code></div>
                  <div className="line number3 index2 alt2"><code className="keyword">class</code> <code className="plain">bubbleSort:</code></div>
                  <div className="line number4 index3 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">"""</code></div>
                  <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">bubbleSort:</code></div>
                  <div className="line number6 index5 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">function:</code></div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">bubbleSortRecursive : recursive </code></div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">function to sort array</code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">__str__ : format print of array</code></div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">__init__ : constructor </code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">function in python</code></div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">variables:</code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">self.array = contains array</code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">self.length = length of array</code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">"""</code></div>
                  <div className="line number16 index15 alt1">&nbsp;</div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">def</code> <code className="plain">__init__(</code><code className="color1">self</code><code className="plain">, array):</code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1">self</code><code className="plain">.array </code><code className="keyword">=</code> <code className="plain">array</code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1">self</code><code className="plain">.length </code><code className="keyword">=</code> <code className="functions">len</code><code className="plain">(array)</code></div>
                  <div className="line number20 index19 alt1">&nbsp;</div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">def</code> <code className="plain">__str__(</code><code className="color1">self</code><code className="plain">):</code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="string">" "</code><code className="plain">.join([</code><code className="functions">str</code><code className="plain">(x) </code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">x </code><code className="keyword">in</code> <code className="color1">self</code><code className="plain">.array])</code></div>
                  <div className="line number24 index23 alt1">&nbsp;</div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">def</code> <code className="plain">bubbleSortRecursive(</code><code className="color1">self</code><code className="plain">, n</code><code className="keyword">=</code><code className="color1">None</code><code className="plain">):</code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">n </code><code className="keyword">is</code> <code className="color1">None</code><code className="plain">:</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">n </code><code className="keyword">=</code> <code className="color1">self</code><code className="plain">.length</code></div>
                  <div className="line number28 index27 alt1">&nbsp;</div>
                  <div className="line number29 index28 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Base case</code></div>
                  <div className="line number30 index29 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">n </code><code className="keyword">=</code><code className="keyword">=</code> <code className="value">1</code><code className="plain">:</code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code></div>
                  <div className="line number32 index31 alt1">&nbsp;</div>
                  <div className="line number33 index32 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># One pass of bubble sort. After</code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># this pass, the largest element</code></div>
                  <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># is moved (or bubbled) to end.</code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">i </code><code className="keyword">in</code> <code className="functions">range</code><code className="plain">(n </code><code className="keyword">-</code> <code className="value">1</code><code className="plain">):</code></div>
                  <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="color1">self</code><code className="plain">.array[i] &gt; </code><code className="color1">self</code><code className="plain">.array[i </code><code className="keyword">+</code> <code className="value">1</code><code className="plain">]:</code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1">self</code><code className="plain">.array[i], </code><code className="color1">self</code><code className="plain">.array[i </code><code className="keyword">+</code></div>
                  <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="value">1</code><code className="plain">] </code><code className="keyword">=</code> <code className="color1">self</code><code className="plain">.array[i </code><code className="keyword">+</code> <code className="value">1</code><code className="plain">], </code><code className="color1">self</code><code className="plain">.array[i]</code></div>
                  <div className="line number40 index39 alt1">&nbsp;</div>
                  <div className="line number41 index40 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Largest element is fixed,</code></div>
                  <div className="line number42 index41 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">#&nbsp; recur for remaining array</code></div>
                  <div className="line number43 index42 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="color1">self</code><code className="plain">.bubbleSortRecursive(n </code><code className="keyword">-</code> <code className="value">1</code><code className="plain">)</code></div>
                  <div className="line number44 index43 alt1">&nbsp;</div>
                  <div className="line number45 index44 alt2"><code className="comments"># Driver Code</code></div>
                  <div className="line number46 index45 alt1"><code className="keyword">def</code> <code className="plain">main():</code></div>
                  <div className="line number47 index46 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">array </code><code className="keyword">=</code> <code className="plain">[</code><code className="value">64</code><code className="plain">, </code><code className="value">34</code><code className="plain">, </code><code className="value">25</code><code className="plain">, </code><code className="value">12</code><code className="plain">, </code><code className="value">22</code><code className="plain">, </code><code className="value">11</code><code className="plain">, </code><code className="value">90</code><code className="plain">]</code></div>
                  <div className="line number48 index47 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number49 index48 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Creating object for class</code></div>
                  <div className="line number50 index49 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">sort </code><code className="keyword">=</code> <code className="plain">bubbleSort(array)</code></div>
                  <div className="line number51 index50 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number52 index51 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Sorting array</code></div>
                  <div className="line number53 index52 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">sort.bubbleSortRecursive()</code></div>
                  <div className="line number54 index53 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">print</code><code className="plain">(</code><code className="string">"Sorted array :\n"</code><code className="plain">, sort)</code></div>
                  <div className="line number55 index54 alt2">&nbsp;</div>
                  <div className="line number56 index55 alt1">&nbsp;</div>
                  <div className="line number57 index56 alt2"><code className="keyword">if</code> <code className="plain">__name__ </code><code className="keyword">=</code><code className="keyword">=</code> <code className="string">"__main__"</code><code className="plain">:</code></div>
                  <div className="line number58 index57 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">main()</code></div>
                  <div className="line number59 index58 alt2">&nbsp;</div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);