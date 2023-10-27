// Define a CodeMirror mode for Ansible playbook
// ansible-playbook.js

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

CodeMirror.defineMode("ansible-playbook", function() {
  // Define your custom styles for 'ok', 'changed', 'skip' and 'fatal'
  var style = CodeMirror.getMode();

  // Create a function to parse and style the text
  function ansibleToken(stream, state) {
    if (stream.match(/PLAY \[.*\]/)) {
      return "header";
    } else if (stream.match(/TASK \[.*\]/)) {
      return "header";
    } else if (stream.match(/PLAY RECAP/)) {
      return "header";
    } else if (stream.match(/ok: [^\n]+(?:\n|$)/)) {
      return "ok";
    } else if (stream.match(/changed: [^\n]+(?:\n|$)/)) {
      return "changed";
    } else if (stream.match(/fatal: [^\n]+(?:\n|$)/)) {
      return "fatal";
    } else if (stream.match(/skipping: [^\n]+(?:\n|$)/)) {
      return "skipping"
    } else if (stream.match(/debug: [^\n]+(?:\n|$)/)) {
      return "debug"
    } else if (stream.match(/warn: [^\n]+(?:\n|$)/)) {
      return "warn"
    } else if (stream.match(/ok=[1-9]\d*/)) {
      return "ok";
    } else if (stream.match(/changed=[1-9]\d*/)) {
      return "changed";
    } else if (stream.match(/unreachable=[1-9]\d*/)) {
      return "unreachable";
    } else if (stream.match(/skip=[1-9]\d*/)) {
      return "skip";
    } else if (stream.match(/failed=[1-9]\d*/)) {
      return "fatal";
    } else if (stream.match(/\[WARNING\]: [^\n]+(?:\n|$)/)) {
      return "warn";
    } else {
      stream.next();
      return null;
    };
  };

  return {
    token: ansibleToken,
    startState: style.startState,
    copyState: style.copyState,
    indent: style.indent,
    electricChars: style.electricChars,
  };
});

  CodeMirror.defineMIME("text/x-ansible-playbook", "ansible-playbook");
});
