const {ipcRenderer} = require('electron')

var fam_varset = [
  "0.baby.varset.kosifamapju.mp4",
  "1.baby.varset.kosizupaguklozi.mp4",
  "2.baby.varset.kosiperapju.mp4",
  "3.baby.varset.kosizupaguklozi.mp4",
  "4.baby.varset.daperaprati.mp4",
  "5.baby.varset.kosifamapju.mp4",
  "6.baby.varset.dazupaprati.mp4",
  "7.baby.varset.spinozekadroguklozi.mp4",
  "8.baby.varset.kosifamaprati.mp4",
  "9.baby.varset.spinozeperapju.mp4",
  "10.baby.varset.dakadroprati.mp4",
  "11.baby.varset.kosiperapju.mp4",
  "12.baby.varset.spinozekadroguklozi.mp4",
  "13.baby.varset.kosizupapju.mp4",
  "14.baby.varset.dafamaguklozi.mp4",
  "15.baby.varset.spinozekadroprati.mp4",
  "16.baby.varset.dafamaguklozi.mp4",
  "17.baby.varset.spinozezupapju.mp4",
  "18.baby.varset.dazupaprati.mp4",
  "19.baby.varset.spinozezupaguklozi.mp4",
  "20.baby.varset.kosizupapju.mp4",
  "21.baby.varset.spinozefamaguklozi.mp4",
  "22.baby.varset.kosikadroprati.mp4",
  "23.baby.varset.daperapju.mp4",
  "24.baby.varset.spinozekadroguklozi.mp4",
  "25.baby.varset.kosizupaprati.mp4",
  "26.baby.varset.spinozefamapju.mp4",
  "27.baby.varset.kosikadroguklozi.mp4",
  "28.baby.varset.daperapju.mp4",
  "29.baby.varset.spinozezupaguklozi.mp4",
  "30.baby.varset.kosiperaprati.mp4",
  "31.baby.varset.spinozefamapju.mp4",
  "32.baby.varset.kosikadroprati.mp4",
  "33.baby.varset.dazupapju.mp4",
  "34.baby.varset.kosifamaguklozi.mp4",
  "35.baby.varset.spinozeperaguklozi.mp4",
  "36.baby.varset.dafamaguklozi.mp4",
  "37.baby.varset.spinozezupaguklozi.mp4",
  "38.baby.varset.dakadropju.mp4",
  "39.baby.varset.spinozezupaprati.mp4",
  "40.baby.varset.kosiperaguklozi.mp4",
  "41.baby.varset.spinozefamaprati.mp4",
  "42.baby.varset.kosikadroguklozi.mp4",
  "43.baby.varset.spinozefamapju.mp4",
  "44.baby.varset.dazupaguklozi.mp4",
  "45.baby.varset.spinozeperapju.mp4",
  "46.baby.varset.dakadroprati.mp4",
  "47.baby.varset.spinozefamaguklozi.mp4",
  "48.baby.varset.daperapju.mp4",
  "49.baby.varset.spinozefamaguklozi.mp4",
  "50.baby.varset.kosikadropju.mp4",
  "51.baby.varset.dafamaprati.mp4",
  "52.baby.varset.dakadropju.mp4",
  "53.baby.varset.daperaguklozi.mp4",
  "54.baby.varset.dafamaprati.mp4",
  "55.baby.varset.spinozekadropju.mp4",
  "56.baby.varset.dazupaguklozi.mp4",
  "57.baby.varset.spinozekadroprati.mp4",
  "58.baby.varset.dazupaguklozi.mp4",
  "59.baby.varset.spinozekadroprati.mp4",
  "60.baby.varset.kosiperapju.mp4",
  "61.baby.varset.spinozefamaprati.mp4",
  "62.baby.varset.dakadropju.mp4",
  "63.baby.varset.kosiperaguklozi.mp4",
  "64.baby.varset.dafamaprati.mp4",
  "65.baby.varset.kosikadropju.mp4",
  "66.baby.varset.spinozezupaprati.mp4",
  "67.baby.varset.dakadroguklozi.mp4",
  "68.baby.varset.kosifamaprati.mp4",
  "69.baby.varset.dafamapju.mp4",
  "70.baby.varset.kosifamaguklozi.mp4",
  "71.baby.varset.dafamapju.mp4",
  "72.baby.varset.spinozezupaprati.mp4",
  "73.baby.varset.kosiperaguklozi.mp4",
  "74.baby.varset.dafamapju.mp4",
  "75.baby.varset.kosiperaprati.mp4",
  "76.baby.varset.spinozezupapju.mp4",
  "77.baby.varset.daperaprati.mp4",
  "78.baby.varset.kosifamaguklozi.mp4",
  "79.baby.varset.dazupaprati.mp4",
  "80.baby.varset.spinozeperapju.mp4",
  "81.baby.varset.kosizupaprati.mp4",
  "82.baby.varset.spinozeperaguklozi.mp4",
  "83.baby.varset.kosikadroprati.mp4",
  "84.baby.varset.dazupapju.mp4",
  "85.baby.varset.spinozeperaprati.mp4",
  "86.baby.varset.kosifamaprati.mp4",
  "87.baby.varset.dakadroprati.mp4",
  "88.baby.varset.spinozefamaprati.mp4",
  "89.baby.varset.kosikadropju.mp4",
  "90.baby.varset.daperaguklozi.mp4",
  "91.baby.varset.spinozekadropju.mp4",
  "92.baby.varset.kosiperaprati.mp4",
  "93.baby.varset.dakadroguklozi.mp4",
  "94.baby.varset.spinozezupaprati.mp4",
  "95.baby.varset.daperaguklozi.mp4",
  "96.baby.varset.spinozezupapju.mp4",
  "97.baby.varset.dakadroguklozi.mp4",
  "98.baby.varset.kosizupaprati.mp4",
  "99.baby.varset.spinozeperaguklozi.mp4",
  "100.baby.varset.kosifamapju.mp4",
  "101.baby.varset.daperaprati.mp4",
  "102.baby.varset.kosizupapju.mp4"
]

var test_words = [
  "1.baby.words.testitems.dafa.ripped.wav",
  "2.baby_words_testitems_fama.wav",
  "3.baby.words.testitems.pera.wav",
  "4.baby.words.testitems.kadro.ripped.wav",
  "5.baby.words.testitems.zupa.ripped.wav",
  "13.baby.words.testitems.drogu.wav",
  "14.baby.words.testitems.pagu.ripped.wav",
  "16.baby.words.testitems.zeka.ripped.wav"
]

var ppc = new createjs.PlayPropsConfig().set({loop: -1})
var Q
var video_div
var video_element
var image_element
var ag
var body
var stage
var canvas
var stimuli = 0
var mode
var famil_number = fam_varset.length
var look_record = []
var stimuli_record = []
var exp_start = 0
var habituated = false
var hab_window = 30000
var hab_baseline = 0
var getter_start = 0

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function init () {
  video_div = document.getElementById('vidspot')
  canvas = document.getElementById('canvas')
  body = document.getElementById('body')
  video_div.style.display = "none"
  stage = new createjs.Stage(canvas)
  preload()
}

function preload () {
  createjs.Sound.alternateExtensions = ["mp3","wav"];
  var i = 0
  var manifest = []
  // Uncomment to test looping
  //fam_varset = fam_varset.slice(0,2)
  while (i < fam_varset.length) {
    console.log("Loading", i)
    manifest.push( {"id":parseInt(i), "src":"../media/"+fam_varset[i]} )
    i += 1
  }
  
  i = 0
  test_words = test_words.shuffle()
  while (i < test_words.length) {
    console.log("Loading Test", i)
    createjs.Sound.registerSound("../media/words/"+test_words[i], "t"+parseInt(i))
    i += 1
  }
  
  manifest.push( {"id":"get", "src":"../media/"+"get.mp4"} )
  manifest.push( {"id":"check", "src":"../media/"+"check.jpg"})
  createjs.Sound.registerSound("../media/"+"ag.wav", "ag")
  
  Q = new createjs.LoadQueue(true)
  Q.on('complete', setup)
  Q.loadManifest(manifest)
}

function setup () {
  mode = 'begin'
  window.requestAnimationFrame(mainLoop)
}

function start_famil () {
  video_div.style.display = "inline"
  canvas.style.display = "none"
  video_element= Q.getResult("0")
  video_div.appendChild(video_element)
  video_element.play()
  exp_start = performance.now()
  stimuli_record.push([fam_varset[stimuli], performance.now()])
  mode = 'famil'
}

function start_getter() {
  createjs.Sound.stop()
  video_div.removeChild(image_element)
  video_element= Q.getResult("get")
  video_div.appendChild(video_element)
  video_element.setAttribute("loop", true)
  createjs.Sound.play("ag",ppc)
  video_element.play()
  mode = "getter"
}

function next_test_stimuli() {
  createjs.Sound.stop()
  video_div.removeChild(video_element)
  image_element = Q.getResult("check")
  video_div.appendChild(image_element)
  createjs.Sound.play("t"+parseInt(stimuli),ppc)
  stimuli_record.push([test_words[stimuli], performance.now()])
  mode = "test"
}

function mainLoop (delta) {
  if (mode == 'begin') {
    var begin_message = "When ready to begin, press and hold SPACE"
    var begin_stim = new createjs.Text(begin_message)
    begin_stim.x = 300
    begin_stim.y = canvas.height / 2
    stage.addChild(begin_stim)
    stage.update()
    mode = 'rest_begin'
  }
  
  else if (mode == 'famil') {
    var now = performance.now()
    
    if ( (hab_baseline == 0) && (now - exp_start > hab_window) ) {
      hab_baseline = sum_time(exp_start, now)[0]
    }
    
    else if (hab_baseline > 0) {
      var window_looking = sum_time( (now - hab_window), now )[0]
      if ( window_looking  < (hab_baseline / 2) ) {habituated = true} 
    }
    
    if (video_element.ended) {
      stimuli_record.push( [stimuli_record[stimuli_record.length -1][0], performance.now()] )
      if (habituated == false) {
        video_div.removeChild(video_element)
        stimuli += 1
        if (stimuli >= fam_varset.length) {stimuli = 0}
        video_element= Q.getResult(parseInt(stimuli))
        video_div.appendChild(video_element)
        video_element.play()
        stimuli_record.push([fam_varset[stimuli], performance.now()])
      }
      else if (habituated == true) {
        stimuli = 0
        video_div.removeChild(video_element)
        video_element= Q.getResult("get")
        video_div.appendChild(video_element)
        video_element.setAttribute("loop", true)
        createjs.Sound.play("ag",ppc)
        video_element.play()
        mode = "getter"
      }
    }
  }
    
  else if (mode == 'test') {
    if (space_down == false) {
      var now = performance.now()
      var away = sum_time( look_record[look_record.length - 1], now )[1]
      if (away > 2000.0) {
        stimuli_record.push( [stimuli_record[stimuli_record.length - 1][0], performance.now()] )
        stimuli += 1
        if (stimuli >= test_words.length) {mode = "end"}
        else {start_getter()}
        }
    }
  }
  
  else if (mode=="end") {
    createjs.Sound.stop()
    video_div.style.display = "none"
    canvas.style.display = "inline"
    stage.removeAllChildren()
    stage.update()
    var end_message = "Thank you for participating!  :)"
    var end_stim = new createjs.Text(end_message)
    end_stim.x = 300
    end_stim.y = canvas.height / 2
    stage.addChild(end_stim)
    stage.update()
    write_data()
    mode = "all_stop"
  }
  
  window.requestAnimationFrame(mainLoop)
}

function write_data(){
  meta = JSON.parse(localStorage.meta)
  data = {
    "name": meta.name,
    "age": meta.age,
    "ra": meta.ra,
    "look_record": look_record,
    "stimuli_record": stimuli_record
  }
  console.log(ipcRenderer.sendSync('write_data', data))
}

document.addEventListener("keydown", handle_keydown)
document.addEventListener("keyup", handle_keyup)

var space_down = false

function handle_keyup (e) {
  if (e.code == "Space") {
    space_down = false
    look_record.push(performance.now())
  }
}

function handle_keydown (e) {
  if (space_down == false && e.code == "Space") {
    space_down = true
    look_record.push(performance.now())
    if (mode == 'rest_begin'){start_famil()}
    if (mode == 'getter'){mode = "nil"; next_test_stimuli()}
  }
  
  else if (e.code == "Escape") {
    mode = "end"
  }
  
}

function sum_index (start, stop) {
  if (start > stop) {return "error"}
  var looking = 0
  var away = 0
  var current = start
  while (current != stop) {
    var s = look_record[current]
    var t = look_record[current + 1]
    var delta = t - s
    if (current % 2 == 0) {
      looking += delta 
    }
    else if (current % 2 == 1) {
      away += delta
    }
    current += 1
  }
  return [looking, away]
}

function sum_time (start_time, stop_time) {
  if (start_time > stop_time) {return "error"}
  
  var delta = stop_time - start_time
  var looking = 0
  var away = 0
  var end_i = look_record.length - 1
  var start_i = 0
  var stop_i = end_i
  var i = 0
  var val = 0
  
  while (i < end_i + 1) {
    var val = look_record[i]
    if ( (val < start_time) ) {start_i = i + 1}
    if ( (val <= stop_time) ) {stop_i = i}
    i += 1
  }
  
  if (start_time > look_record[end_i]) {start_i = 'above'}
  if (stop_time < look_record[0]) {stop_i = 'below'}
  
  if (start_i == 'above') {
    if (end_i % 2 == 0) {
      return [delta, away]
    }
    else { return [looking, delta] }
  }
  
  else if (stop_i == 'below') {
    return [looking, delta]
  }
  
  else {
    var low_delta = look_record[start_i] - start_time
    var high_delta = stop_time - look_record[stop_i]
    
    if (start_i % 2 == 0) { away += low_delta }
    else { looking += low_delta }
    
    if (stop_i % 2 == 0) { looking += high_delta}
    else {away += high_delta}

    var result = sum_index(start_i, stop_i)
    looking += result[0]
    away += result[1]
    
    return [looking, away]
  }
}
