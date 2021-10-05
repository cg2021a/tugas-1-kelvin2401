function main(){
    /*============= Creating a canvas ==================*/
    var canvas = document.getElementById('my_Canvas');
    gl = canvas.getContext('experimental-webgl');
    
    /*========== Defining and storing the geometry ==========*/

    var vertices = [
       -0.9,0.5,0.5, //base
       -0.9,-0.35,0.5,
       -0.1,-0.35,0.5,
       -0.1,0.5,0.5,

       -0.8,0.35,0.0, //layar
       -0.8,0.2,0.0,
       -0.2,0.2,0.0,
       -0.2,0.35,0.0,

       -0.8,0.12,0.0, //keycap1
       -0.8,0.06,0.0,
       -0.7,0.06,0.0,
       -0.7,0.12,0.0,

       -0.675,0.12,0.0, //keycap2
       -0.675,0.06,0.0,
       -0.575,0.06,0.0,
       -0.575,0.12,0.0,

       -0.55,0.12,0.0, //keycap3
       -0.55,0.06,0.0,
       -0.45,0.06,0.0,
       -0.45,0.12,0.0,

       -0.425,0.12,0.0, //keycap4
       -0.425,0.06,0.0,
       -0.325,0.06,0.0,
       -0.325,0.12,0.0,

       -0.3,0.12,0.0, //keycap5
       -0.3,0.06,0.0,
       -0.2,0.06,0.0,
       -0.2,0.12,0.0,

       -0.8,0.04,0.0,
       -0.8,-0.02,0.0,
       -0.7,-0.02,0.0,
       -0.7,0.04,0.0,
       
       -0.675,0.04,0.0,
       -0.675,-0.02,0.0,
       -0.575,-0.02,0.0,
       -0.575,0.04,0.0,

       -0.55,0.04,0.0,
       -0.55,-0.02,0.0,
       -0.45,-0.02,0.0,
       -0.45,0.04,0.0,

       -0.425,0.04,0.0,
       -0.425,-0.02,0.0,
       -0.325,-0.02,0.0,
       -0.325,0.04,0.0,

       -0.3,0.04,0.0,
       -0.3,-0.02,0.0,
       -0.2,-0.02,0.0,
       -0.2,0.04,0.0,

       -0.8,-0.04,0.0,
       -0.8,-0.1,0.0,
       -0.7,-0.1,0.0,
       -0.7,-0.04,0.0,
       
       -0.675,-0.04,0.0,
       -0.675,-0.1,0.0,
       -0.575,-0.1,0.0,
       -0.575,-0.04,0.0,

       -0.55,-0.04,0.0,
       -0.55,-0.1,0.0,
       -0.45,-0.1,0.0,
       -0.45,-0.04,0.0,

       -0.425,-0.04,0.0,
       -0.425,-0.1,0.0,
       -0.325,-0.1,0.0,
       -0.325,-0.04,0.0,

       -0.3,-0.04,0.0,
       -0.3,-0.1,0.0,
       -0.2,-0.1,0.0,
       -0.2,-0.04,0.0,

       -0.8,-0.12,0.0,
       -0.8,-0.18,0.0,
       -0.7,-0.18,0.0,
       -0.7,-0.12,0.0,
       
       -0.675,-0.12,0.0,
       -0.675,-0.18,0.0,
       -0.575,-0.18,0.0,
       -0.575,-0.12,0.0,

       -0.55,-0.12,0.0,
       -0.55,-0.18,0.0,
       -0.45,-0.18,0.0,
       -0.45,-0.12,0.0,

       -0.3,-0.12,0.0,
       -0.3,-0.18,0.0,
       -0.2,-0.18,0.0,
       -0.2,-0.12,0.0,

       -0.8,-0.2,0.0,
       -0.8,-0.26,0.0,
       -0.7,-0.26,0.0,
       -0.7,-0.2,0.0,
       
       -0.675,-0.2,0.0,
       -0.675,-0.26,0.0,
       -0.575,-0.26,0.0,
       -0.575,-0.2,0.0,

       -0.55,-0.2,0.0,
       -0.55,-0.26,0.0,
       -0.45,-0.26,0.0,
       -0.45,-0.2,0.0,

       -0.3,-0.2,0.0,
       -0.3,-0.26,0.0,
       -0.2,-0.26,0.0,
       -0.2,-0.2,0.0,

       -0.425,-0.12,0.0, //tombol plus
       -0.425,-0.26,0.0,
       -0.325,-0.26,0.0,
       -0.325,-0.12,0.0,
    ];

    var colors = [
        0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15, 
        0.4,0.4,0.4, 0.4,0.4,0.4, 0.4,0.4,0.4, 0.4,0.4,0.4,  
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        1.0,0.45,0.0, 1.0,0.45,0.0, 1.0,0.45,0.0, 1.0,0.45,0.0, 
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
        0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
       ];
    
    var indices = [
        3,2,1,3,1,0,
        7,6,5,7,5,4,
        11,10,9,11,9,8,
        15,14,13,15,13,12,
        19,18,17,19,17,16,
        23,22,21,23,21,20,
        27,26,25,27,25,24,
        31,30,29,31,29,28,
        35,34,33,35,33,32,
        39,38,37,39,37,36,
        43,42,41,43,41,40,
        47,46,45,47,45,44,
        51,50,49,51,49,48,
        55,54,53,55,53,52,
        59,58,57,59,57,56,
        63,62,61,63,61,60,
        67,66,65,67,65,64,
        71,70,69,71,69,68,
        75,74,73,75,73,72,
        79,78,77,79,77,76,
        83,82,81,83,81,80,
        87,86,85,87,85,84,
        91,90,89,91,89,88,
        95,94,93,95,93,92,
        99,98,97,99,97,96,
        103,102,101,103,101,100,
       ];
    
    

    /*======================= Shaders =======================*/
    
    // vertex shader source code
    var vertCode = 'attribute vec3 coordinates;'+
       'uniform vec4 translation;' +
       'attribute vec3 color;'+
       'varying vec3 vColor;'+
       'void main(void) {' +   
          ' gl_Position = translation + vec4(coordinates, 1.0);' +
          'vColor = color;'+
       '}';
       
    // Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);

    // Attach vertex shader source code
    gl.shaderSource(vertShader, vertCode);

    // Compile the vertex shader
    gl.compileShader(vertShader);


    // fragment shader source code
    var fragCode = 'precision mediump float;'+
       'varying vec3 vColor;'+
       'void main(void) {'+
          'gl_FragColor = vec4(vColor, 1.);'+
       '}';
       
    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Attach fragment shader source code
    gl.shaderSource(fragShader, fragCode);

    // Compile the fragmentt shader
    gl.compileShader(fragShader);

    // Create a shader program object to
    // store the combined shader program
    var shaderProgram = gl.createProgram();

    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader);

    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);

    // Link both the programs
    gl.linkProgram(shaderProgram);

    // Use the combined shader program object
    gl.useProgram(shaderProgram);

    

    

    //Object 2
    var vertices2 = [
       0.1,0.5,0.5, //base
       0.1,-0.35,0.5,
       0.9,-0.35,0.5,
       0.9,0.5,0.5,

       0.2,-0.2,0.0, //layar
       0.2,-0.05,0.0,
       0.8,-0.05,0.0,
       0.8,-0.2,0.0,

       0.8,0.03,0.0, //keycap1
       0.8,0.09,0.0,
       0.7,0.09,0.0,
       0.7,0.03,0.0,

       0.675,0.03,0.0, //keycap2
       0.675,0.09,0.0,
       0.575,0.09,0.0,
       0.575,0.03,0.0,

       0.55,0.03,0.0, //keycap3
       0.55,0.09,0.0,
       0.45,0.09,0.0,
       0.45,0.03,0.0,

       0.425,0.03,0.0, //keycap4
       0.425,0.09,0.0,
       0.325,0.09,0.0,
       0.325,0.03,0.0,

       0.3,0.03,0.0, //keycap5
       0.3,0.09,0.0,
       0.2,0.09,0.0,
       0.2,0.03,0.0,

       0.8,0.11,0.0,
       0.8,0.17,0.0,
       0.7,0.17,0.0,
       0.7,0.11,0.0,
       
       0.675,0.11,0.0,
       0.675,0.17,0.0,
       0.575,0.17,0.0,
       0.575,0.11,0.0,

       0.55,0.11,0.0,
       0.55,0.17,0.0,
       0.45,0.17,0.0,
       0.45,0.11,0.0,

       0.425,0.11,0.0,
       0.425,0.17,0.0,
       0.325,0.17,0.0,
       0.325,0.11,0.0,

       0.3,0.11,0.0,
       0.3,0.17,0.0,
       0.2,0.17,0.0,
       0.2,0.11,0.0,

       0.8,0.19,0.0,
       0.8,0.25,0.0,
       0.7,0.25,0.0,
       0.7,0.19,0.0,
       
       0.675,0.19,0.0,
       0.675,0.25,0.0,
       0.575,0.25,0.0,
       0.575,0.19,0.0,

       0.55,0.19,0.0,
       0.55,0.25,0.0,
       0.45,0.25,0.0,
       0.45,0.19,0.0,

       0.425,0.19,0.0,
       0.425,0.25,0.0,
       0.325,0.25,0.0,
       0.325,0.19,0.0,

       0.3,0.19,0.0,
       0.3,0.25,0.0,
       0.2,0.25,0.0,
       0.2,0.19,0.0,

       0.8,0.27,0.0,
       0.8,0.33,0.0,
       0.7,0.33,0.0,
       0.7,0.27,0.0,
       
       0.675,0.27,0.0,
       0.675,0.33,0.0,
       0.575,0.33,0.0,
       0.575,0.27,0.0,

       0.55,0.27,0.0,
       0.55,0.33,0.0,
       0.45,0.33,0.0,
       0.45,0.27,0.0,

       0.3,0.27,0.0,
       0.3,0.33,0.0,
       0.2,0.33,0.0,
       0.2,0.27,0.0,

       0.8,0.35,0.0,
       0.8,0.41,0.0,
       0.7,0.41,0.0,
       0.7,0.35,0.0,
       
       0.675,0.35,0.0,
       0.675,0.41,0.0,
       0.575,0.41,0.0,
       0.575,0.35,0.0,

       0.55,0.35,0.0,
       0.55,0.41,0.0,
       0.45,0.41,0.0,
       0.45,0.35,0.0,

       0.3,0.35,0.0,
       0.3,0.41,0.0,
       0.2,0.41,0.0,
       0.2,0.35,0.0,

       0.425,0.27,0.0, //tombol plus
       0.425,0.41,0.0,
       0.325,0.41,0.0,
       0.325,0.27,0.0,
    ];

    var colors2 = [
       0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15,
       0.4,0.4,0.4, 0.4,0.4,0.4, 0.4,0.4,0.4, 0.4,0.4,0.4,  
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       1.0,0.45,0.0, 1.0,0.45,0.0, 1.0,0.45,0.0, 1.0,0.45,0.0, 
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25, 0.25,0.25,0.25,
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 
       0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0,
    ];

    var indices2 = [
       3,2,1,3,1,0,
       7,6,5,7,5,4,
       11,10,9,11,9,8,
       15,14,13,15,13,12,
       19,18,17,19,17,16,
       23,22,21,23,21,20,
       27,26,25,27,25,24,
       31,30,29,31,29,28,
       35,34,33,35,33,32,
       39,38,37,39,37,36,
       43,42,41,43,41,40,
       47,46,45,47,45,44,
       51,50,49,51,49,48,
       55,54,53,55,53,52,
       59,58,57,59,57,56,
       63,62,61,63,61,60,
       67,66,65,67,65,64,
       71,70,69,71,69,68,
       75,74,73,75,73,72,
       79,78,77,79,77,76,
       83,82,81,83,81,80,
       87,86,85,87,85,84,
       91,90,89,91,89,88,
       95,94,93,95,93,92,
       99,98,97,99,97,96,
       103,102,101,103,101,100,
    ];

    

    
    var speed = 0.0080;
    var Ty_old = 0;
    
    var animate = function(time) {
       // Create an empty buffer object and store vertex data
      var vertex_buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);

      // Create an empty buffer object and store Index data
      var Index_Buffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

      // Create an empty buffer object and store color data
      var color_buffer = gl.createBuffer ();
      gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

      /* ======== Associating shaders to buffer objects =======*/

    var Tx = 0.0, Ty = 0.0, Tz = 0.0;
    var translation = gl.getUniformLocation(shaderProgram, 'translation');
    gl.uniform4f(translation, Tx, Ty, Tz, 0.0);

   // Bind vertex buffer object
   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

   // Bind index buffer object
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

   // Get the attribute location
   var coord = gl.getAttribLocation(shaderProgram, "coordinates");

   // point an attribute to the currently bound VBO
   gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

   // Enable the attribute
   gl.enableVertexAttribArray(coord);

   // bind the color buffer
   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);

   // get the attribute location
   var color = gl.getAttribLocation(shaderProgram, "color");

   // point attribute to the volor buffer object
   gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

   // enable the color attribute
   gl.enableVertexAttribArray(color);

   /*============Drawing the Quad====================*/

    // Clear the canvas
    gl.clearColor(0.8, 0.8, 0.8, 0.9);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);

    // Clear the color buffer bit
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Set the view port
    gl.viewport(0,0,canvas.width,canvas.height);

    //Draw the triangle
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);

    // Create an empty buffer object and store vertex data
    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Create an empty buffer object and store Index data
    var Index_Buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices2), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // Create an empty buffer object and store color data
    var color_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors2), gl.STATIC_DRAW);

    var Tx = 0.0, Ty = Ty_old + speed, Tz = 0.0;
         var translation = gl.getUniformLocation(shaderProgram, 'translation');
         gl.uniform4f(translation, Tx, Ty, Tz, 0.0);

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Bind index buffer object
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    // point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord);

    // bind the color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    
    // get the attribute location
    var color = gl.getAttribLocation(shaderProgram, "color");

    // point attribute to the volor buffer object
    gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

    // enable the color attribute
    gl.enableVertexAttribArray(color);

    //Draw the triangle
    gl.drawElements(gl.TRIANGLES, indices2.length, gl.UNSIGNED_SHORT,0);
    if(Ty>0.5){
       speed *= -1;
    }
    else if(Ty<-0.65){
       speed *= -1;
    }
    Ty_old = Ty;
    window.requestAnimationFrame(animate);
   }
   animate(0)
}