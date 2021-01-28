import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB3(props, ref) {
    return (
      <div {...props} ref={ref}>
        <Text type="headline-4">Source code in Python</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Recursive</b> implementation of Binary Search</h4></span>
              <div className="container text-left">
              <div className="offset-3 mt-4 mb-5">
                <div className="line number1 index0 alt2"><code className="comments"># Python3 Program for recursive binary search. </code></div>
                <div className="line number2 index1 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number3 index2 alt2 highlighted"><code className="comments"># Returns index of x in arr if present, else -1 </code></div>
                <div className="line number4 index3 alt1"><code className="keyword">def</code> <code className="plain">binarySearch (arr, l, r, x): </code></div>
                <div className="line number5 index4 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number6 index5 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Check base case </code></div>
                <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">r &gt;</code><code className="keyword">=</code> <code className="plain">l: </code></div>
                <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mid </code><code className="keyword">=</code> <code className="plain">l </code><code className="keyword">+</code> <code className="plain">(r </code><code className="keyword">-</code> <code className="plain">l) </code><code className="keyword">/</code><code className="keyword">/</code> <code className="value">2</code></div>
                <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If element is present at the middle itself </code></div>
                <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">arr[mid] </code><code className="keyword">=</code><code className="keyword">=</code> <code className="plain">x: </code></div>
                <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">mid </code></div>
                <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If element is smaller than mid, then it&nbsp; </code></div>
                <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># can only be present in left subarray </code></div>
                <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">elif</code> <code className="plain">arr[mid] &gt; x: </code></div>
                <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">binarySearch(arr, l, mid</code><code className="keyword">-</code><code className="value">1</code><code className="plain">, x) </code></div>
                <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Else the element can only be present&nbsp; </code></div>
                <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># in right subarray </code></div>
                <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code><code className="plain">: </code></div>
                <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">binarySearch(arr, mid </code><code className="keyword">+</code> <code className="value">1</code><code className="plain">, r, x) </code></div>
                <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code><code className="plain">: </code></div>
                <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Element is not present in the array </code></div>
                <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="keyword">-</code><code className="value">1</code></div>
                <div className="line number28 index27 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number29 index28 alt2"><code className="comments"># Driver Code </code></div>
                <div className="line number30 index29 alt1"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[ </code><code className="value">2</code><code className="plain">, </code><code className="value">3</code><code className="plain">, </code><code className="value">4</code><code className="plain">, </code><code className="value">10</code><code className="plain">, </code><code className="value">40</code> <code className="plain">] </code></div>
                <div className="line number31 index30 alt2"><code className="plain">x </code><code className="keyword">=</code> <code className="value">10</code></div>
                <div className="line number32 index31 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number33 index32 alt2"><code className="comments"># Function call </code></div>
                <div className="line number34 index33 alt1"><code className="plain">result </code><code className="keyword">=</code> <code className="plain">binarySearch(arr, </code><code className="value">0</code><code className="plain">, </code><code className="functions">len</code><code className="plain">(arr)</code><code className="keyword">-</code><code className="value">1</code><code className="plain">, x) </code></div>
                <div className="line number35 index34 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                <div className="line number36 index35 alt1"><code className="keyword">if</code> <code className="plain">result !</code><code className="keyword">=</code> <code className="keyword">-</code><code className="value">1</code><code className="plain">: </code></div>
                <div className="line number37 index36 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">(</code><code className="string">"Element is present at index % d"</code> <code className="keyword">%</code> <code className="plain">result) </code></div>
                <div className="line number38 index37 alt1"><code className="keyword">else</code><code className="plain">: </code></div>
                <div className="line number39 index38 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">(</code><code className="string">"Element is not present in array"</code><code className="plain">) </code></div></div>
              </div>
            </h5><br></br><br></br>

            <h5><span><h4 className="text-success"><b>Iterative</b> implementation of Binary Search</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <div className="line number1 index0 alt2"><code className="comments"># Python3 code to implement iterative Binary&nbsp; </code></div>
                  <div className="line number2 index1 alt1"><code className="comments"># Search. </code></div>
                  <div className="line number3 index2 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number4 index3 alt1"><code className="comments"># It returns location of x in given array arr&nbsp; </code></div>
                  <div className="line number5 index4 alt2"><code className="comments"># if present, else returns -1 </code></div>
                  <div className="line number6 index5 alt1"><code className="keyword">def</code> <code className="plain">binarySearch(arr, l, r, x): </code></div>
                  <div className="line number7 index6 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number8 index7 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">while</code> <code className="plain">l &lt;</code><code className="keyword">=</code> <code className="plain">r: </code></div>
                  <div className="line number9 index8 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number10 index9 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">mid </code><code className="keyword">=</code> <code className="plain">l </code><code className="keyword">+</code> <code className="plain">(r </code><code className="keyword">-</code> <code className="plain">l) </code><code className="keyword">/</code><code className="keyword">/</code> <code className="value">2</code><code className="plain">; </code></div>
                  <div className="line number11 index10 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number12 index11 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># Check if x is present at mid </code></div>
                  <div className="line number13 index12 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">if</code> <code className="plain">arr[mid] </code><code className="keyword">=</code><code className="keyword">=</code> <code className="plain">x: </code></div>
                  <div className="line number14 index13 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="plain">mid </code></div>
                  <div className="line number15 index14 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number16 index15 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If x is greater, ignore left half </code></div>
                  <div className="line number17 index16 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">elif</code> <code className="plain">arr[mid] &lt; x: </code></div>
                  <div className="line number18 index17 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">l </code><code className="keyword">=</code> <code className="plain">mid </code><code className="keyword">+</code> <code className="value">1</code></div>
                  <div className="line number19 index18 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number20 index19 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If x is smaller, ignore right half </code></div>
                  <div className="line number21 index20 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">else</code><code className="plain">: </code></div>
                  <div className="line number22 index21 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="plain">r </code><code className="keyword">=</code> <code className="plain">mid </code><code className="keyword">-</code> <code className="value">1</code></div>
                  <div className="line number23 index22 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;</div>
                  <div className="line number24 index23 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># If we reach here, then the element </code></div>
                  <div className="line number25 index24 alt2"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="comments"># was not present </code></div>
                  <div className="line number26 index25 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="keyword">return</code> <code className="keyword">-</code><code className="value">1</code></div>
                  <div className="line number27 index26 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number28 index27 alt1"><code className="comments"># Driver Code </code></div>
                  <div className="line number29 index28 alt2"><code className="plain">arr </code><code className="keyword">=</code> <code className="plain">[ </code><code className="value">2</code><code className="plain">, </code><code className="value">3</code><code className="plain">, </code><code className="value">4</code><code className="plain">, </code><code className="value">10</code><code className="plain">, </code><code className="value">40</code> <code className="plain">] </code></div>
                  <div className="line number30 index29 alt1"><code className="plain">x </code><code className="keyword">=</code> <code className="value">10</code></div>
                  <div className="line number31 index30 alt2"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number32 index31 alt1"><code className="comments"># Function call </code></div>
                  <div className="line number33 index32 alt2"><code className="plain">result </code><code className="keyword">=</code> <code className="plain">binarySearch(arr, </code><code className="value">0</code><code className="plain">, </code><code className="functions">len</code><code className="plain">(arr)</code><code className="keyword">-</code><code className="value">1</code><code className="plain">, x) </code></div>
                  <div className="line number34 index33 alt1"><code className="undefined spaces">&nbsp;</code>&nbsp;</div>
                  <div className="line number35 index34 alt2"><code className="keyword">if</code> <code className="plain">result !</code><code className="keyword">=</code> <code className="keyword">-</code><code className="value">1</code><code className="plain">: </code></div>
                  <div className="line number36 index35 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">(</code><code className="string">"Element is present at index % d"</code> <code className="keyword">%</code> <code className="plain">result) </code></div>
                  <div className="line number37 index36 alt2"><code className="keyword">else</code><code className="plain">: </code></div>
                  <div className="line number38 index37 alt1"><code className="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code className="functions">print</code> <code className="plain">(</code><code className="string">"Element is not present in array"</code><code className="plain">) </code></div>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);