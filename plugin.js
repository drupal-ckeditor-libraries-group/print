﻿/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

/**
 * @file Print Plugin
 */

CKEDITOR.plugins.add( 'print', {
	lang: [ 'af', 'ar', 'bg', 'bn', 'bs', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en-au', 'en-ca', 'en-gb', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr-ca', 'fr', 'gl', 'gu', 'he', 'hi', 'hr', 'hu', 'is', 'it', 'ja', 'ka', 'km', 'ko', 'lt', 'lv', 'mk', 'mn', 'ms', 'nb', 'nl', 'no', 'pl', 'pt-br', 'pt', 'ro', 'ru', 'sk', 'sl', 'sr-latn', 'sr', 'sv', 'th', 'tr', 'ug', 'uk', 'vi', 'zh-cn', 'zh' ],
	init: function( editor ) {
		var pluginName = 'print';

		// Register the command.
		var command = editor.addCommand( pluginName, CKEDITOR.plugins.print );

		// Register the toolbar button.
		editor.ui.addButton && editor.ui.addButton( 'Print', {
			label: editor.lang.print.toolbar,
			command: pluginName
		});
	}
});

CKEDITOR.plugins.print = {
	exec: function( editor ) {
		if ( CKEDITOR.env.opera )
			return;
		else if ( CKEDITOR.env.gecko )
			editor.window.$.print();
		else
			editor.document.$.execCommand( "Print" );
	},
	canUndo: false,
	readOnly: 1,
	modes: { wysiwyg: !( CKEDITOR.env.opera ) } // It is imposible to print the inner document in Opera.
};
