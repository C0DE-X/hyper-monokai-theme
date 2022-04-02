
const foregroundColor = '#E6E6E7';
const backgroundColor = '#2A2D33';
const red = '#B34E69';
const green = '#A5D673';
const yellow = '#FFD866';
const blue = '#76D8E4';
const magenta = '#A295E5';
const cyan = '#6ABEC9';
const backgroundAccent = '#26282C';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#FFFF28',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: 'foregroundColor',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

        .header_header {
            background-color: ${backgroundAccent} !important;
        }

		/* Add a highlight line below the active tab */
		.tab_tab {
            background-color: ${backgroundAccent} !important;
		}
		.tab_active {
			background-color: ${backgroundColor} !important;
		}
		.tabs_nav .tabs_list .tab_active .tab_text {
			border-top: 3px solid #4D5156;
		}
        .splitpane_divider { 
            background-color: ${backgroundAccent} !important;
        }
		
		.xterm-viewport::-webkit-scrollbar-button {
			width: 0;
			height: 0;
			display: none;
		}
		.xterm-viewport::-webkit-scrollbar-corner {
			background-color: transparent;
		}
		.xterm-viewport::-webkit-scrollbar {
			width: 10px;
			height: 10px;
		}
		.xterm-viewport::-webkit-scrollbar-track,
		.xterm-viewport::-webkit-scrollbar-thumb {
			-webkit-border-radius: 0px;
		}
		.xterm-viewport::-webkit-scrollbar-track {
			background-color: ${backgroundAccent};
		}
		.xterm-viewport::-webkit-scrollbar-thumb {
			background-color: #4D5156;
			opacity: 1.0
			-webkit-box-shadow: none;
		}
		.xterm .xterm-viewport {
			overflow-y: auto;
		}

		/* Allow custom css / overrides */
		${config.css}
	`
});
