import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Entry } from './journal.js'

$(document).ready(function() {
  $(journalForm).submit(function(event) {
    event.preventDefault();
    var inputTile = $("#title").val();
    var inputBody = $("#body").val();
    var newWords - new Entry(inputTitle, inputBody);

  })
})
