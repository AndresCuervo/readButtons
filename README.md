# A script for allowing screen readers access to buttons

Run `yarn` to download the dependencies, for now it's only [`bookmarklet`](https://www.npmjs.com/package/bookmarklet),
and compile with:

```sh
bookmarklet readButtons.js out.js
```

## TODO:

- [x] Add `bookmarklet` as a node dependency to this project
- [ ] Add [`gulp-bookmarklet `](https://www.npmjs.com/package/gulp-bookmarklet) as
a way to automate this! Do it with [Yarn](https://yarnpkg.com)? (or, actually, just use `make`?)
