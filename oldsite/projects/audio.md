# Audio Visualizer in Verilog

For a 2nd year digital design course, my partner and I were tasked with implementing a project of our choice on bare metal, on a development board running an ARM Cortex-A9 (with an FPGA in the SoC).

We decided to create a Audio Visualizer, which would take an audio input, and output the Waveform to VGA. We programmed this in C, which compiles and runs on the onboard ARM chip. All external IO including VGA and microphone is interfaced directly through memory mapped IO.

![Screenshot with output](res/img/audiovisualizer.png)

Development of this allowed me to learn more about digital signal processing, including different filtering algorithms and their effects on the output frequency space plot. I also had to manually implement several high performance math functions: pow, cos, sin, sqrt.

Experimented with Hann and Blackman windows.

[Github](https://github.com/dpbaines/DE1-SoC-Audio-Visualizer)