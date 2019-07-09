//原始的x-shader/x-fragment
void main()
{
    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
}



//更改的x-shader/x-fragment
void main()
{
    float WT9_0  = 1.0 ;
    float WT9_1  = 0.8 ;
    float WT9_2  = 0.6 ;
    float WT9_3  = 0.4 ;
    float WT9_4  = 0.2 ;
    float WT9_NORMALIZE = (WT9_0+2.0*(WT9_1+WT9_2+WT9_3+WT9_4));
    float RTT_SIZE = 128.0;
    float TexelIncrement = 1.0 / RTT_SIZE;


    float colour = texture2D(uSampler,vec2(vTextureCoord.s +1.0 * TexelIncrement  , vTextureCoord.t) ).w * (0.8/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s + 2.0 * TexelIncrement , vTextureCoord.t) ).w * (WT9_2/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s + 3.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_3/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s + 4.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_4/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s, vTextureCoord.t) ).w * (WT9_0/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s -1.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_1/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s -2.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_2/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s -3.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_3/WT9_NORMALIZE);
    colour += texture2D(uSampler,vec2(vTextureCoord.s -4.0 * TexelIncrement, vTextureCoord.t) ).w * (WT9_3/WT9_NORMALIZE);

    float col = 1.0 - colour;

    gl_FragColor = vec4(col, col, col, col);
}







