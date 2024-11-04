// import React, { useEffect, useState } from 'react';

// // Define la interfaz para el estado de los datos
// interface SheetData {
//   name: string;
//   major: string;
// }

// const CLIENT_ID = '1066368230597-47gsmbeuiafm4qiq1cnp6f2q9jkf51nv.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyBWU4vHQzIB8mF9_ASEWmIA2UZ-5b1L0BU';
// const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
// const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// const SheetsApiComponent: React.FC = () => {
//   const [data, setData] = useState<SheetData[]>([]);
//   const [isAuthorized, setIsAuthorized] = useState(false);

//   useEffect(() => {
//     const gapiLoaded = () => {
//       gapi.load('client', initializeGapiClient);
//     };

//     const gisLoaded = () => {
//       const tokenClient = window.google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: (resp: any) => {
//           if (resp.error) {
//             throw resp;
//           }
//           setIsAuthorized(true);
//           listMajors();
//         },
//       });
      
//       if (window.gapi.client.getToken() === null) {
//         // Solicitar acceso si no hay token
//         tokenClient.requestAccessToken({ prompt: 'consent' });
//       } else {
//         // Si ya existe un token, solicitar acceso sin consentimiento
//         tokenClient.requestAccessToken({ prompt: '' });
//       }
//     };

//     const initializeGapiClient = async () => {
//       await window.gapi.client.init({
//         apiKey: API_KEY,
//         discoveryDocs: [DISCOVERY_DOC],
//       });
//     };

//     const listMajors = async () => {
//       let response;
//       try {
//         response = await window.gapi.client.sheets.spreadsheets.values.get({
//           spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
//           range: 'Class Data!A2:E',
//         });
//         const values = response.result.values || [];
//         const sheetData = values.map((row: any) => ({
//           name: row[0],
//           major: row[4],
//         }));
//         setData(sheetData);
//       } catch (error) {
//         console.error('Error fetching data from Sheets:', error);
//       }
//     };

//     window.gapiLoaded = gapiLoaded;
//     window.gisLoaded = gisLoaded;

//     // const script1 = document.createElement('script');
//     // script1.src = 'https://apis.google.com/js/api.js';
//     // script1.async = true;
//     // script1.defer = true;
//     // script1.onload = gapiLoaded;

//     // const script2 = document.createElement('script');
//     // script2.src = 'https://accounts.google.com/gsi/client';
//     // script2.async = true;
//     // script2.defer = true;
//     // script2.onload = gisLoaded;

//     document.body.appendChild(script1);
//     document.body.appendChild(script2);
    
//     return () => {
//       // Cleanup scripts if necessary
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   const handleSignOut = () => {
//     const token = window.gapi.client.getToken();
//     if (token) {
//       window.google.accounts.oauth2.revoke(token.access_token);
//       window.gapi.client.setToken('');
//       setIsAuthorized(false);
//       setData([]);
//     }
//   };

//   return (
//     <div>
//       <p>Sheets API Quickstart</p>
//       {!isAuthorized ? (
//         <button onClick={() => window.gisLoaded()}>Authorize</button>
//       ) : (
//         <>
//           <button onClick={handleSignOut}>Sign Out</button>
//           <pre style={{ whiteSpace: 'pre-wrap' }}>
//             {data.length > 0
//               ? data.map((item) => `${item.name}, ${item.major}`).join('\n')
//               : 'No data found.'}
//           </pre>
//         </>
//       )}
//     </div>
//   );
// };

// export default SheetsApiComponent;
