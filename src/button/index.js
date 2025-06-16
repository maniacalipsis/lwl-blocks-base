import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies:
import {edit,save} from './edit';
import metadata from './block.json';

registerBlockType(metadata.name,
                  {
                     edit:edit,
                     save:save,
                  });
