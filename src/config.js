import web3 from "./web3";

export const address = "0xE60EbB6D90Bf2dCCd80eb3ed1cB93Ec5D8CF47B3";

export const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			}
		],
		"name": "agregarInstitucion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfshashdoc",
				"type": "string"
			}
		],
		"name": "CertificadoCreado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfshashdoc",
				"type": "string"
			}
		],
		"name": "emitirCertificado",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"name": "InstitucionAgreado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "certificados",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "emisor",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "dirwallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "gradoacademico",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ci",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfshashdoc",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorcertistotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorcerts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contadorinst",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInstituto",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Instituciones",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "InstMostrar",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "swich",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "ipfshashs",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"name": "obtenerCertificado",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emisor",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "dirwallet",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "gradoacademico",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "ci",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nombre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "timestamp",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfshashdoc",
						"type": "string"
					}
				],
				"internalType": "struct CertiContrato.Certificado",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "hashdoc",
				"type": "string"
			}
		],
		"name": "verificarcertificado",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dirInstitucion",
				"type": "address"
			}
		],
		"name": "verificarInstituto",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, address);

export default contract;
