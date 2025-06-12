<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render (in particular, to learn about predefined variables available).
 */
namespace LWL_Blocks;

?>
<SECTION <?=render_attributes($attributes)?>>
   <DIV <?=render_attributes($attributes,attrs_prefix:"inner_")?>>
   <?php
    foreach ($block->inner_blocks as $key=>$inner_block)
       echo $inner_block->render();
   ?>
   </DIV>
</SECTION>
