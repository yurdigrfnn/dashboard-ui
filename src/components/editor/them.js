// make theme nightowl object
const nightOwl = {
    plain: {
        color: '#abb2bf',
        backgroundColor: '#282c34',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: 'rgb(99, 119, 119)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: '#abb2bf',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['tag', 'operator', 'number'],
            style: {
                color: '#e06c75',
            },
        },
        {
            types: ['property', 'function'],
            style: {
                color: '#d19a66',
            },
        },
        {
            types: ['tag-id', 'selector', 'atrule-id'],
            style: {
                color: '#e5c07b',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#98c379',
            },
        },
        {
            types: ['boolean', 'string', 'entity', 'url', 'attr-value', 'control', 'directive', 'unit', 'statement', 'regex', 'at-rule'],
            style: {
                color: '#56b6c2',
            },
        },
        {
            types: ['placeholder', 'variable'],
            style: {
                color: '#c678dd',
            },
        },
        {
            types: ['deleted'],
            style: {
                textDecorationLine: 'line-through',
            },
        },
        {
            types: ['inserted', 'attr-value'],
            style: {
                color: 'rgb(173, 219, 103)',
            },
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic',
            },
        },
        {
            types: ['important', 'bold'],
            style: {
                fontWeight: 'bold',
            },
        },
        {
            types: ['important'],
            style: {
                color: '#c678dd',
            },
        },
        {
            types: ['entity'],
            style: {
                cursor: 'help',
            },
        },
    ],
};
