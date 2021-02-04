import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Merge Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                  <pre className="prettyprint notranslate prettyprinted"><span className="pun">&lt;?</span><span className="pln">php
                    </span><span className="com">&#47;&#47; function for merge sort - splits the array </span><span className="pln">
                    </span><span className="com">&#47;&#47; and call merge function to sort and merge the array</span><span className="pln">
                    </span><span className="com">&#47;&#47; mergesort is a recursive function</span><span className="pln">
                    </span><span className="kwd">function</span><span className="pln"> mergesort</span><span className="pun">(&amp;</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $left</span><span className="pun">,</span><span className="pln"> $right</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                      </span><span className="kwd">if</span><span className="pln"> </span><span className="pun">(</span><span className="pln">$left </span><span className="pun">&lt;</span><span className="pln"> $right</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                        $mid </span><span className="pun">=</span><span className="pln"> $left </span><span className="pun">+</span><span className="pln"> </span><span className="pun">(</span><span className="kwd">int</span><span className="pun">)((</span><span className="pln">$right </span><span className="pun">-</span><span className="pln"> $left</span><span className="pun">)/</span><span className="lit">2</span><span className="pun">);</span><span className="pln">
                        mergesort</span><span className="pun">(</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $left</span><span className="pun">,</span><span className="pln"> $mid</span><span className="pun">);</span><span className="pln">
                        mergesort</span><span className="pun">(</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $mid</span><span className="pun">+</span><span className="lit">1</span><span className="pun">,</span><span className="pln"> $right</span><span className="pun">);</span><span className="pln">
                        merge</span><span className="pun">(</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $left</span><span className="pun">,</span><span className="pln"> $mid</span><span className="pun">,</span><span className="pln"> $right</span><span className="pun">);</span><span className="pln">
                      </span><span className="pun">&#125;</span><span className="pln">
                    </span><span className="pun">&#125;</span><span className="pln">

                    </span><span className="com">&#47;&#47; merge function performs sort and merge operations</span><span className="pln">
                    </span><span className="com">&#47;&#47; for mergesort function</span><span className="pln">
                    </span><span className="kwd">function</span><span className="pln"> merge</span><span className="pun">(&amp;</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $left</span><span className="pun">,</span><span className="pln"> $mid</span><span className="pun">,</span><span className="pln"> $right</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                      </span><span className="com">&#47;&#47; Create two temporary array to hold split </span><span className="pln">
                      </span><span className="com">&#47;&#47; elements of main array </span><span className="pln">
                      $n1 </span><span className="pun">=</span><span className="pln"> $mid </span><span className="pun">-</span><span className="pln"> $left </span><span className="pun">+</span><span className="pln"> </span><span className="lit">1</span><span className="pun">;</span><span className="pln"> </span><span className="com">&#47;&#47;no of elements in LeftArray</span><span className="pln">
                      $n2 </span><span className="pun">=</span><span className="pln"> $right </span><span className="pun">-</span><span className="pln"> $mid</span><span className="pun">;</span><span className="pln">     </span><span className="com">&#47;&#47;no of elements in RightArray    </span><span className="pln">
                      $LeftArray </span><span className="pun">=</span><span className="pln"> array_fill</span><span className="pun">(</span><span className="lit">0</span><span className="pun">,</span><span className="pln"> $n1</span><span className="pun">,</span><span className="pln"> </span><span className="lit">0</span><span className="pun">);</span><span className="pln"> 
                      $RightArray </span><span className="pun">=</span><span className="pln"> array_fill</span><span className="pun">(</span><span className="lit">0</span><span className="pun">,</span><span className="pln"> $n2</span><span className="pun">,</span><span className="pln"> </span><span className="lit">0</span><span className="pun">);</span><span className="pln">
                      </span><span className="kwd">for</span><span className="pun">(</span><span className="pln">$i</span><span className="pun">=</span><span className="lit">0</span><span className="pun">;</span><span className="pln"> $i </span><span className="pun">&lt;</span><span className="pln"> $n1</span><span className="pun">;</span><span className="pln"> $i</span><span className="pun">++)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                        $LeftArray</span><span className="pun">[</span><span className="pln">$i</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $Array</span><span className="pun">[</span><span className="pln">$left </span><span className="pun">+</span><span className="pln"> $i</span><span className="pun">];</span><span className="pln">
                      </span><span className="pun">&#125;</span><span className="pln">
                      </span><span className="kwd">for</span><span className="pun">(</span><span className="pln">$i</span><span className="pun">=</span><span className="lit">0</span><span className="pun">;</span><span className="pln"> $i </span><span className="pun">&lt;</span><span className="pln"> $n2</span><span className="pun">;</span><span className="pln"> $i</span><span className="pun">++)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                        $RightArray</span><span className="pun">[</span><span className="pln">$i</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $Array</span><span className="pun">[</span><span className="pln">$mid </span><span className="pun">+</span><span className="pln"> $i </span><span className="pun">+</span><span className="pln"> </span><span className="lit">1</span><span className="pun">];</span><span className="pln">
                      </span><span className="pun">&#125;</span><span className="pln">

                      </span><span className="com">&#47;&#47; In below section x, y and z represents index number</span><span className="pln">
                      </span><span className="com">&#47;&#47; of LeftArray, RightArray and Array respectively</span><span className="pln">
                      $x</span><span className="pun">=</span><span className="lit">0</span><span className="pun">;</span><span className="pln"> $y</span><span className="pun">=</span><span className="lit">0</span><span className="pun">;</span><span className="pln"> $z</span><span className="pun">=</span><span className="pln">$left</span><span className="pun">;</span><span className="pln">
                      </span><span className="kwd">while</span><span className="pun">(</span><span className="pln">$x </span><span className="pun">&lt;</span><span className="pln"> $n1 </span><span className="pun">&amp;&amp;</span><span className="pln"> $y </span><span className="pun">&lt;</span><span className="pln"> $n2</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
                        </span><span className="kwd">if</span><span className="pun">(</span><span className="pln">$LeftArray</span><span className="pun">[</span><span className="pln">$x</span><span className="pun">]</span><span className="pln"> </span><span className="pun">&lt;</span><span className="pln"> $RightArray</span><span className="pun">[</span><span className="pln">$y</span><span className="pun">])</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                          $Array</span><span className="pun">[</span><span className="pln">$z</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $LeftArray</span><span className="pun">[</span><span className="pln">$x</span><span className="pun">];</span><span className="pln"> 
                          $x</span><span className="pun">++;</span><span className="pln"> 
                        </span><span className="pun">&#125;</span><span className="pln">
                        </span><span className="kwd">else</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                          $Array</span><span className="pun">[</span><span className="pln">$z</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $RightArray</span><span className="pun">[</span><span className="pln">$y</span><span className="pun">];</span><span className="pln">  
                          $y</span><span className="pun">++;</span><span className="pln"> 
                        </span><span className="pun">&#125;</span><span className="pln">
                        $z</span><span className="pun">++;</span><span className="pln">
                      </span><span className="pun">&#125;</span><span className="pln">

                      </span><span className="com">&#47;&#47; Copying the remaining elements of LeftArray</span><span className="pln">
                      </span><span className="kwd">while</span><span className="pun">(</span><span className="pln">$x </span><span className="pun">&lt;</span><span className="pln"> $n1</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                        $Array</span><span className="pun">[</span><span className="pln">$z</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $LeftArray</span><span className="pun">[</span><span className="pln">$x</span><span className="pun">];</span><span className="pln">  
                        $x</span><span className="pun">++;</span><span className="pln">  
                        $z</span><span className="pun">++;</span><span className="pln">
                      </span><span className="pun">&#125;</span><span className="pln">

                      </span><span className="com">&#47;&#47; Copying the remaining elements of RightArray</span><span className="pln">
                      </span><span className="kwd">while</span><span className="pun">(</span><span className="pln">$y </span><span className="pun">&lt;</span><span className="pln"> $n2</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                        $Array</span><span className="pun">[</span><span className="pln">$z</span><span className="pun">]</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> $RightArray</span><span className="pun">[</span><span className="pln">$y</span><span className="pun">];</span><span className="pln"> 
                        $y</span><span className="pun">++;</span><span className="pln">  
                        $z</span><span className="pun">++;</span><span className="pln"> 
                      </span><span className="pun">&#125;</span><span className="pln">
                    </span><span className="pun">&#125;</span><span className="pln">

                    </span><span className="com">&#47;&#47; function to print array</span><span className="pln">
                    </span><span className="kwd">function</span><span className="pln"> </span><span className="typ">PrintArray</span><span className="pun">(</span><span className="pln">$Array</span><span className="pun">,</span><span className="pln"> $n</span><span className="pun">)</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> 
                      </span><span className="kwd">for</span><span className="pln"> </span><span className="pun">(</span><span className="pln">$i </span><span className="pun">=</span><span className="pln"> </span><span className="lit">0</span><span className="pun">;</span><span className="pln"> $i </span><span className="pun">&lt;</span><span className="pln"> $n</span><span className="pun">;</span><span className="pln"> $i</span><span className="pun">++)</span><span className="pln"> 
                        echo $Array</span><span className="pun">[</span><span className="pln">$i</span><span className="pun">].</span><span className="str">" "</span><span className="pun">;</span><span className="pln"> 
                    </span><span className="pun">&#125;</span><span className="pln"> 

                    </span><span className="com">&#47;&#47; test the code</span><span className="pln">
                    $MyArray </span><span className="pun">=</span><span className="pln"> array</span><span className="pun">(</span><span className="lit">10</span><span className="pun">,</span><span className="pln"> </span><span className="lit">1</span><span className="pun">,</span><span className="pln"> </span><span className="lit">23</span><span className="pun">,</span><span className="pln"> </span><span className="lit">50</span><span className="pun">,</span><span className="pln"> </span><span className="lit">4</span><span className="pun">,</span><span className="pln"> </span><span className="lit">9</span><span className="pun">,</span><span className="pln"> </span><span className="pun">-</span><span className="lit">4</span><span className="pun">);</span><span className="pln">
                    $n </span><span className="pun">=</span><span className="pln"> </span><span className="kwd">sizeof</span><span className="pun">(</span><span className="pln">$MyArray</span><span className="pun">);</span><span className="pln"> 
                    echo </span><span className="str">"Original Array\n"</span><span className="pun">;</span><span className="pln">
                    </span><span className="typ">PrintArray</span><span className="pun">(</span><span className="pln">$MyArray</span><span className="pun">,</span><span className="pln"> $n</span><span className="pun">);</span><span className="pln">

                    mergesort</span><span className="pun">(</span><span className="pln">$MyArray</span><span className="pun">,</span><span className="pln"> </span><span className="lit">0</span><span className="pun">,</span><span className="pln"> $n</span><span className="pun">-</span><span className="lit">1</span><span className="pun">);</span><span className="pln">
                    echo </span><span className="str">"\nSorted Array\n"</span><span className="pun">;</span><span className="pln">
                    </span><span className="typ">PrintArray</span><span className="pun">(</span><span className="pln">$MyArray</span><span className="pun">,</span><span className="pln"> $n</span><span className="pun">);</span><span className="pln">
                    </span><span className="pun">?&gt;</span>
                  </pre>
                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);