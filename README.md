![alt text](https://github.com/buildog/BarterDEX/raw/master/resources/github/logoWithPunchline.png)

Let’s decentralize Cryptocurrency Exchanges and secure it with BarterDEX

## Electron (Node.js)

Before starting make sure you have [Agama wallet](https://github.com/SuperNETorg/Agama) running on your machine, with at least 2 coins activated in native mode.

#### Install dependencies

This project require nanomsg, you can install it via Homebrew:

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null
```

```shell
brew install nanomsg
```

#### Install barterDEX

```shell
git clone git@github.com:buildog/BarterDEX.git
cd BarterDEX
npm install
```

#### Development Commands list

| command  | task performed  |
|:-----------| -----------|
| `npm start`   | run the built application (`/dist`) |
| `npm run dev` | start dev (webpack will hot-reload the JavaScript and CSS) |
| `npm run dist` | generate a new build to `/dist` :shipit: 🎉 |
| `npm run release` | build a new package release for all plateform |


## Apps

#### 1. Install dependencies
#### 2. Download and install the packages [Release page](https://github.com/buildog/BarterDEX/releases)

## Package release

[electron-packager](https://github.com/electron-userland/electron-packager) is used generate the packages. You can create a release for all plateform via `npm run release` or platform specific via `npm run [package-mac | package-linux | package-win]`

## Updates

auto-updater will be available soon

## Known issues and workaround

## Built With
[React](https://facebook.github.io/react/) |
[Mobx](https://github.com/mobxjs/mobx) |
[Webpack](https://webpack.github.io/)  |
[Electron](https://github.com/electron/electron)  |
[PostCSS](https://github.com/postcss/postcss)  | **and a lot of 😍**


## Contributing
The best way to contribute is by looking at the [issues](https://github.com/buildog/BarterDEX/issues) in this repo.  

## License
This repository is licensed under the GNU General Public License v3.0, also included in our repository in the [COPYING](https://github.com/buildog/BarterDEX/blob/master/COPYING) file.

## Disclamer

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
