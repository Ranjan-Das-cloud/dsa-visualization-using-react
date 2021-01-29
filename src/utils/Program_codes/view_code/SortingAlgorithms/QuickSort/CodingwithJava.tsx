import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageQ4(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in Java</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Quick Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments">&#47;&#47; Java program for implementation of QuickSort </code></div>
                  <div className="line number2 index1 alt1"><code className="keyword">class</code> <code className="plain">QuickSort </code></div>
                  <div className="line number3 index2 alt2"><code className="plain">&#123; </code></div>
                  <div className="line number4 index3 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* This function takes last element as pivot, </code></div>
                  <div className="line number5 index4 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">places the pivot element at its correct </code></div>
                  <div className="line number6 index5 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">position in sorted array, and places all </code></div>
                  <div className="line number7 index6 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">smaller (smaller than pivot) to left of </code></div>
                  <div className="line number8 index7 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">pivot and all greater elements to right </code></div>
                  <div className="line number9 index8 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">of pivot */</code></div>
                  <div className="line number10 index9 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">partition(</code><code className="keyword">int</code> <code className="plain">arr[], </code><code className="keyword">int</code> <code className="plain">low, </code><code className="keyword">int</code> <code className="plain">high) </code></div>
                  <div className="line number11 index10 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number12 index11 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">pivot = arr[high];&nbsp; </code></div>
                  <div className="line number13 index12 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">i = (low-</code><code className="value">1</code><code className="plain">); </code><code className="comments">&#47;&#47; index of smaller element </code></div>
                  <div className="line number14 index13 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="keyword">int</code> <code className="plain">j=low; j&lt;high; j++) </code></div>
                  <div className="line number15 index14 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number16 index15 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; If current element is smaller than the pivot </code></div>
                  <div className="line number17 index16 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(arr[j] &lt; pivot) </code></div>
                  <div className="line number18 index17 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number19 index18 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">i++; </code></div>
                  <div className="line number20 index19 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number21 index20 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; swap arr[i] and arr[j] </code></div>
                  <div className="line number22 index21 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">temp = arr[i]; </code></div>
                  <div className="line number23 index22 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i] = arr[j]; </code></div>
                  <div className="line number24 index23 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[j] = temp; </code></div>
                  <div className="line number25 index24 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number26 index25 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number27 index26 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number28 index27 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; swap arr[i+1] and arr[high] (or pivot) </code></div>
                  <div className="line number29 index28 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">temp = arr[i+</code><code className="value">1</code><code className="plain">]; </code></div>
                  <div className="line number30 index29 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[i+</code><code className="value">1</code><code className="plain">] = arr[high]; </code></div>
                  <div className="line number31 index30 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">arr[high] = temp; </code></div>
                  <div className="line number32 index31 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number33 index32 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">i+</code><code className="value">1</code><code className="plain">; </code></div>
                  <div className="line number34 index33 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number35 index34 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number36 index35 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number37 index36 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* The main function that implements QuickSort() </code></div>
                  <div className="line number38 index37 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">arr[] --&gt; Array to be sorted, </code></div>
                  <div className="line number39 index38 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">low&nbsp; --&gt; Starting index, </code></div>
                  <div className="line number40 index39 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">high&nbsp; --&gt; Ending index */</code></div>
                  <div className="line number41 index40 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">void</code> <code className="plain">sort(</code><code className="keyword">int</code> <code className="plain">arr[], </code><code className="keyword">int</code> <code className="plain">low, </code><code className="keyword">int</code> <code className="plain">high) </code></div>
                  <div className="line number42 index41 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number43 index42 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">(low &lt; high) </code></div>
                  <div className="line number44 index43 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number45 index44 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* pi is partitioning index, arr[pi] is&nbsp; </code></div>
                  <div className="line number46 index45 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">now at right place */</code></div>
                  <div className="line number47 index46 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">pi = partition(arr, low, high); </code></div>
                  <div className="line number48 index47 alt1 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number49 index48 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Recursively sort elements before </code></div>
                  <div className="line number50 index49 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; partition and after partition </code></div>
                  <div className="line number51 index50 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">sort(arr, low, pi-</code><code className="value">1</code><code className="plain">); </code></div>
                  <div className="line number52 index51 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">sort(arr, pi+</code><code className="value">1</code><code className="plain">, high); </code></div>
                  <div className="line number53 index52 alt2 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number54 index53 alt1 highlighted"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number55 index54 alt2 highlighted"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number56 index55 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">/* A utility function to print array of size n */</code></div>
                  <div className="line number57 index56 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">printArray(</code><code className="keyword">int</code> <code className="plain">arr[]) </code></div>
                  <div className="line number58 index57 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number59 index58 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">n = arr.length; </code></div>
                  <div className="line number60 index59 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">for</code> <code className="plain">(</code><code className="keyword">int</code> <code className="plain">i=</code><code className="value">0</code><code className="plain">; i&lt;n; ++i) </code></div>
                  <div className="line number61 index60 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">System.out.print(arr[i]+</code><code className="string">" "</code><code className="plain">); </code></div>
                  <div className="line number62 index61 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">System.out.println(); </code></div>
                  <div className="line number63 index62 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number64 index63 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number65 index64 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments">&#47;&#47; Driver program </code></div>
                  <div className="line number66 index65 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">public</code> <code className="keyword">static</code> <code className="keyword">void</code> <code className="plain">main(String args[]) </code></div>
                  <div className="line number67 index66 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#123; </code></div>
                  <div className="line number68 index67 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">arr[] = &#123;</code><code className="value">10</code><code className="plain">, </code><code className="value">7</code><code className="plain">, </code><code className="value">8</code><code className="plain">, </code><code className="value">9</code><code className="plain">, </code><code className="value">1</code><code className="plain">, </code><code className="value">5</code><code className="plain">&#125;; </code></div>
                  <div className="line number69 index68 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">int</code> <code className="plain">n = arr.length; </code></div>
                  <div className="line number70 index69 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number71 index70 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">QuickSort ob = </code><code className="keyword">new</code> <code className="plain">QuickSort(); </code></div>
                  <div className="line number72 index71 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">ob.sort(arr, </code><code className="value">0</code><code className="plain">, n-</code><code className="value">1</code><code className="plain">); </code></div>
                  <div className="line number73 index72 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number74 index73 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">System.out.println(</code><code className="string">"sorted array"</code><code className="plain">); </code></div>
                  <div className="line number75 index74 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">printArray(arr); </code></div>
                  <div className="line number76 index75 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">&#125; </code></div>
                  <div className="line number77 index76 alt2"><code className="plain">&#125; </code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);