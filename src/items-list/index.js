import { registerBlockType } from '@wordpress/blocks';

//Internal dependencies:
import {Edit,Save} from './edit';
import metadata from './block.json';

//Public styles:
import './style.scss';

registerBlockType(metadata.name,
                  {
                     edit:Edit,
                     save:Save,
                  });
