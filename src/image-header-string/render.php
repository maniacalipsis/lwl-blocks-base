<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

$root_block_attrs=\render_block_attributes($attributes);
$img_url=\htmlspecialchars($attributes["image"]["url"]);
$img_alt=\htmlspecialchars($attributes["image"]["alt"]);

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
   switch ($attributes["image_tag"])
   {
      case "h2":
      {
         ?><H2 CLASS="header"><?=$attributes["header_text"]?></H2><?php
         break;
      }
      case "h3":
      {
         ?><H3 CLASS="header"><?=$attributes["header_text"]?></H3><?php
         break;
      }
      case "h4":
      {
         ?><H4 CLASS="header"><?=$attributes["header_text"]?></H4><?php
         break;
      }
      case "h5":
      {
         ?><H5 CLASS="header"><?=$attributes["header_text"]?></H5><?php
         break;
      }
      case "h6":
      {
         ?><H6 CLASS="header"><?=$attributes["header_text"]?></H6><?php
         break;
      }
      case "div":
      default: //Default is fallback option.
      {
         ?><DIV CLASS="header"><?=$attributes["header_text"]?></DIV><?php
      }
   }
   ?>
   <DIV CLASS="text"><?=$attributes["text"]?></DIV>
</DIV>
