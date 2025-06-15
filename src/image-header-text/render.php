<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

$root_block_attrs=\render_block_attributes($attributes);
$img_url=\htmlspecialchars($attributes["image"]["url"]);
$img_alt=\htmlspecialchars($attributes["image"]["alt"]);
$header_tag=strtoupper(preg_replace("/[^a-z0-9]/","",$attributes["header_tag"]));
?>
<DIV <?=$root_block_attrs?>>
   <?php
   //Image:
   switch ($attributes["image_tag"])
   {
      case "div":
      {
         ?><DIV CLASS="image" STYLE="background:url('<?=$img_url?>')" TITLE="<?=$img_alt?>"></DIV><?php
         break;
      }
      case "figure":
      {
         ?><FIGURE CLASS="image"><IMG SRC="<?=$img_url?>" ALT="<?=$img_alt?>"></FIGURE><?php
         break;
      }
      case "img":
      default: //Default is fallback option.
      {
         ?><IMG SRC="<?=$img_url?>" ALT="<?=$img_alt?>"><?php
      }
   }
   //Header:
   ?>
   <<?=$header_tag?> CLASS="header"><?=$attributes["header_text"]?></<?=$header_tag?>>
   <DIV CLASS="text">
   <?php
    foreach ($block->inner_blocks as $key=>$inner_block)
       echo $inner_block->render();
   ?>
   </DIV>
</DIV>
