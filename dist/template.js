/**
 * Copyright 2014 ブドウの鳥 [develo.pe]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
 
'use strict';

(function( module, exports ) {

	var fs = require('fs'),
		path = require('path'),
		templates = { };

	fs.readdirSync(__dirname + '/__template/views').forEach(function(file) {
		var basename = path.basename(file, '.def');
		templates[ basename ] = fs.readFileSync(__dirname + '/__template/views/' + file, 'utf8');
	});

	exports = module.exports = templates;

})( module, exports || this );