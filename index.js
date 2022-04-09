const foregroundColor = '#E3E3E3';
const backgroundColor = '#2A2D33';
const red = '#B34E69';
const green = '#A9DC76';
const yellow = '#FFD866';
const blue = '#78DCE8';
const magenta = '#E991E3';
const cyan = '#78E8C6';
const backgroundAccent = '#26282C';

function changeColor(color, amount) { // #FFF not supportet rather use #FFFFFF
    const clamp = (val) => Math.min(Math.max(val, 0), 0xFF)
    const fill = (str) => ('00' + str).slice(-2)

    const num = parseInt(color.substr(1), 16)
    const red = clamp((num >> 16) + amount)
    const green = clamp(((num >> 8) & 0x00FF) + amount)
    const blue = clamp((num & 0x0000FF) + amount)
    return '#' + fill(red.toString(16)) + fill(green.toString(16)) + fill(blue.toString(16))
}

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#FFFF28',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black: backgroundColor,
		red: red,
		green: green,
		yellow: yellow,
		blue: blue,
		magenta: magenta,
		cyan: cyan,
		white: 'foregroundColor',
		lightBlack: '#686868',
		lightRed: changeColor(red, 4),
		lightGreen: changeColor(green, 4),
		lightYellow: changeColor(yellow, 4),
		lightBlue: changeColor(blue, 4),
		lightMagenta: changeColor(magenta, 4),
		lightCyan: changeColor(cyan, 4),
		lightWhite: changeColor(foregroundColor, 4)
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

		/* Fade the title of inactive tabs and the content of inactive panes */
		.term_fit:not(.term_term) {
			opacity: 0.6;
		}
		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.2s ease-in-out;
			will-change: opacity;
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
