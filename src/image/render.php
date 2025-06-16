<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

$img_url=\htmlspecialchars($attributes["image"]["url"]);
$img_alt=\htmlspecialchars($attributes["image"]["alt"]);

$root_block_attrs=\render_block_attributes($attributes);

switch ($attributes["image_tag"])
{
   case "div":
   {
      ?><DIV <?=$root_block_attrs?> STYLE="background:url('<?=$img_url?>')" TITLE="<?=$img_alt?>"></DIV><?php
      break;
   }
   case "img":
   default: //Default is fallback option.
   {
      ?><IMG SRC="<?=$img_url?>" ALT="<?=$img_alt?>" <?=$root_block_attrs?>><?php
   }
}
?>
