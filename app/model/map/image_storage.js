/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) Passbolt SARL (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SARL (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         2.0.0
 */
import DefineMap from 'passbolt-mad/model/map/map';

var ImageStorage = DefineMap.extend('passbolt.model.ImageStorage', {
    /**
     * Get the image path
     * @param {passbolt.model.ImageStorage} img The target image
     * @param {string} version (optional) The version to get
     * @return {string} The image path
     */
    imagePath: function(version) {
        if (typeof this.url == 'undefined') {
            return '';
        }
        if (typeof this.url[version] == 'undefined') {
            return '';
        }
        else {
            return this.url[version];
        }
    }
});
DefineMap.setReference('ImageStorage', ImageStorage);

export default ImageStorage;
