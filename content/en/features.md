---
title: Features
description: Sample
menuTitle: Introduction
category: Features
position: 1
---

❤️ **Lightweight:** Crafted with minimalistic UI design.

⚡️ **Fast:** Send requests and get/copy responses in real-time.

**HTTP Methods**

- `GET` - Requests retrieve resource information
- `POST` - The server creates a new entry in a database
- `PUT` - Updates an existing resource
- `PATCH` - Very similar to `PUT` but makes a partial update on a resource
- `DELETE` - Deletes resource or related component
- `HEAD` - Retrieve response headers identical to those of a GET request, but without the response body.
- `CONNECT` - Establishes a tunnel to the server identified by the target resource
- `OPTIONS` - Describe the communication options for the target resource
- `TRACE` - Performs a message loop-back test along the path to the target resource
- `<custom>` - Some APIs use custom request methods such as `LIST`. Type in your custom methods.

🌈 **Make it yours:** Customizable combinations for background, foreground and accent colors — [customize now](https://hoppscotch.io/settings).

**Theming**

- Choose theme: System (default), Light, Dark and Black
- Choose accent color: Green (default), Teal, Blue, Indigo, Purple, Yellow, Orange, Red and Pink
- Distraction free Zen mode

_Customized themes are synced with cloud / local session_

🔥 **PWA:** Install as a [PWA](https://developers.google.com/web/progressive-web-apps) on your device.

- Instant loading with Service Workers
- Offline support
- Low RAM/memory and CPU usage
- Add to Home Screen
- Desktop PWA

🚀 **Request:** Retrieve response from endpoint instantly.

1. Choose `method`
2. Enter `URL`
3. Send

- Copy/share public "Share URL"
- Generate/copy request code snippets for 10+ languages and frameworks
- Import `cURL`
- Label requests

🔌 **WebSocket:** Establish full-duplex communication channels over a single TCP connection.

📡 **Server Sent Events:** Receive a stream of updates from a server over a HTTP connection without resorting to polling.

🌩 **Socket.IO:** Send and Receive data with SocketIO server.

🦟 **MQTT:** Subscribe and Publish to topics of a MQTT Broker.

🔮 **GraphQL:** GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

- Set endpoint and get schema
- Multi-column docs
- Set custom request headers
- Query schema
- Get query response

🔐 **Authorization:** Allows to identify the end user.

- None
- Basic
- Bearer Token
- OAuth 2.0
- OIDC Access Token/PKCE

📢 **Headers:** Describes the format the body of your request is being sent as.

📫 **Parameters:** Use request parameters to set varying parts in simulated requests.

📃 **Request Body:** Used to send and receive data via the REST API.

- Set `Content Type`
- FormData, JSON and many more
- Toggle between key-value and RAW input parameter list

👋 **Response:** Contains the status line, headers and the message/response body.

- Copy response to clipboard
- Download response as a file
- View response headers
- View raw and preview of HTML, image, JSON, XML responses

⏰ **History:** Request entries are synced with cloud / local session storage to restore with a single click.

📁 **Collections:** Keep your API requests organized with collections and folders. Reuse them with a single click.

- Unlimited collections, folders and requests
- Nested folders
- Export and import as file or GitHub gist

_Collections are synced with cloud / local session storage_

🌐 **Proxy:** Enable Proxy Mode from Settings to access blocked APIs.

- Hide your IP address
- Fixes [`CORS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Cross Origin Resource Sharing) issues
- Access APIs served in non-HTTPS (`http://`) endpoints
- Use your own Proxy URL

_Official proxy server is hosted by Hoppscotch - **[GitHub](https://github.com/hoppscotch/proxyscotch)** - **[Privacy Policy](https://docs.hoppscotch.io/privacy)**_

📜 **Pre-Request Scripts β:** Snippets of code associated with a request that are executed before the request is sent.

- Set environment variables
- Include timestamp in the request headers
- Send a random alphanumeric string in the URL parameters
- Any JavaScript functions

📄 **API Documentation:** Create and share dynamic API documentation easily, quickly.

1. Add your requests to Collections and Folders
2. Export Collections and easily share your APIs with the rest of your team
3. Import Collections and Generate Documentation on-the-go

⌨️ **Keyboard Shortcuts:** Optimized for efficiency.

> **[Read our documentation on Keyboard Shortcuts](https://docs.hoppscotch.io/features/shortcuts)**

🌎 **i18n:** Experience the app in your own language.

Help us to translate Hoppscotch. Please read [`TRANSLATIONS`](/i18n) for details on our [`CODE OF CONDUCT`](/develop), and the process for submitting pull requests to us.

📦 **Add-ons:** Official add-ons for hoppscotch.

- **[Proxy](https://github.com/hoppscotch/proxyscotch)** - A simple proxy server created for Hoppscotch
- **[CLI β](https://github.com/hoppscotch/hopp-cli)** - A CLI solution for Hoppscotch
- **[Browser Extensions](https://github.com/hoppscotch/hoppscotch-extension)** - Browser extensions that simplifies access to Hoppscotch

  [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_16x16.png) **Firefox**](https://addons.mozilla.org/en-US/firefox/addon/hoppscotch) &nbsp;|&nbsp; [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_16x16.png) **Chrome**](https://chrome.google.com/webstore/detail/hoppscotch-extension-for-c/amknoiejhlmhancpahfcfcfhllgkpbld)

  > **Extensions fixes `CORS` issues.**

- **[Hopp-Doc-Gen](https://github.com/hoppscotch/hopp-doc-gen)** - An API doc generator CLI for Hoppscotch

_Add-ons are developed and maintained under **[Hoppscotch Organization](https://github.com/hoppscotch)**._

☁️ **Auth + Sync:** Sign in and sync your data in real-time.

**Sign in with**

- GitHub
- Google
- Email

**Synchronize your data**

- History
- Collections
- Environments
- Settings

✅ **Post-Request Tests β:** Write tests associated with a request that are executed after the request response.

- Check the status code as an integer
- Filter response headers
- Parse the response data
- Any JavaScript functions

🌱 **Environments** : Environment variables allow you to store and reuse values in your requests and scripts.

- Unlimited environments and variables
- Initialize through pre-request script
- Export as / import from GitHub gist

<details>
  <summary><i>Use-cases</i></summary>

---

- By storing a value in a variable, you can reference it throughout your request section
- If you need to update the value, you only have to change it in one place
- Using variables increases your ability to work efficiently and minimizes the likelihood of error

---

</details>

👨‍👩‍👧‍👦 **Teams β:** Helps you collaborate across your team to design, develop, and test APIs faster.

- Unlimited teams
- Unlimited shared collections
- Unlimited team members
- Role-based access control
- Cloud sync
- Multiple devices

🚚 **Bulk Edit:** Edit key-value pairs in bulk.

- Entries are separated by newline
- Keys and values are separated by `:`
- Prepend `//` to any row you want to add but keep disabled

**For more features, please read our [documentation](https://docs.hoppscotch.io).**
