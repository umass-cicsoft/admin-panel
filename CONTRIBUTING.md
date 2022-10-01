# Contribution Guidelines for CICSoft Admin Panel

## Setting up the environment

1. Install Node and NPM
```bash
node -v
v14.18.1

npm -v
6.14.15
```

2. Install VS Code extensions for React
  
  - [Simple React Snippets by Burke Holland](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Documentation

1. Maintain strict documentation for all new features that you add
2. If you are adding new libraries, add documentation regarding how that library is being utilized in the app, its limitations, last updated time, version of library installed / used. There should be enough on this doc such that anyone can identify what a certain library is doing in the app. 
3. Whenever you are stuck with a certain bug and take a good amount of time to rectify it, make a documentation about that bug and how you went about fixing it. It can be useful to future developers and maybe you can also find a solution to your bug in the document. Also add any major references (stackoverflow, youtube videos etc) that you used to rectify the bug.
 
### Creating Branches
  - **Feature**: Whenever you are adding a new feature, use the format `feature-{$author_name}-{$feature_description}`

    Example: `feature-marius-convert_images_to_webp`
    
  - **Bug**: Whenever you are fixing a bug in the repo, use the format `bugfix-{$author_name}-{$bugfix_description}`

    Example: `bugfix-marius-resolve_cors_error`


### Creating and Merging Pull Requests
  - When creating merge requests, mention the issue being fixed or resolved (using `fix #{id}` or `resolve #{id}`) related to the PR, describe the changes made via a changelog 
  - If changes are UI-based, attach screenshots or screen recordings of the new view in the PR description, whichever is pertinent
  - **IMPORTANT:** After creating a pull request, have your code reviewed by at least 1 other person before merging your code


### Testing
  - While implementing any new feature or fixing any bug, ensure that the application is working normally before pushing the code
