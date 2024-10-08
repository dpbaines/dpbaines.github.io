# Mandelbrot Set FPGA Design

This was a Verilog project to render the Mandelbrot set on an FPGA to a VGA output. I built and targetted this for the DE1-SoC which is based on the Cyclone V.

![Placeholder Image for now](res/img/mandelbrot.png)

The user could interface with the FPGA using a keyboard which would provide zoom and panning, as well as allow the user to change the 'resolution' of the render. 

The Mandelbrot set is generated using an iterative function, in which a given coordinate is defined as being in the set if the function will not diverge to infinity. We only test a finite number of iterations, but it follows that more iterations are required to prevent false positives, this is what I mean by 'resolution'.
