package com.gaurav19790.wallpaper

import android.app.WallpaperManager
import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.RectF
import android.os.Build
import android.os.Handler
import android.util.DisplayMetrics
import android.view.WindowManager
import android.widget.Toast
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.io.IOException
import java.net.URL
import kotlin.math.max

class SetWallpaperModule internal constructor(private var reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "SetWallpaperModule"
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @ReactMethod
    fun setWallpaper(url: String?, flag: Int?, isWallpaperSet: Callback) {
        val handler =  Handler()
        val runnable = Runnable {
            try {
                val wallpaperManager = WallpaperManager.getInstance(reactContext)
                val displayMetrics = DisplayMetrics()
                val windowManager =
                  reactContext.getSystemService(Context.WINDOW_SERVICE) as WindowManager
                val display = windowManager.defaultDisplay
                display.getMetrics(displayMetrics)
                wallpaperManager.suggestDesiredDimensions(
                    displayMetrics.widthPixels,
                    displayMetrics.heightPixels
                )
                val width = wallpaperManager.getDesiredMinimumWidth()
                val height = wallpaperManager.getDesiredMinimumHeight()
                val urlObj = URL(url)
                val resource = BitmapFactory.decodeStream(urlObj.openConnection().getInputStream())
                val wallpaper = scaleCenterCrop(resource, height, width)
                when (flag) {
                    1 -> {
                        wallpaperManager.setBitmap(wallpaper, null, false, flag)
                        handler.post {
                            Toast.makeText(
                               reactContext,
                                "Wallpaper has been set on home screen",
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                    }

                    2 -> {
                        wallpaperManager.setBitmap(wallpaper, null, false, flag)
                        handler.post {
                            Toast.makeText(
                              reactContext,
                                "Wallpaper has been set on lock screen",
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                    }

                    else -> {
                        wallpaperManager.setBitmap(wallpaper)
                        handler.post {
                            Toast.makeText(
                              reactContext,
                                "Wallpaper has been set on both screen",
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                    }
                }
                isWallpaperSet.invoke(true)
            } catch (e: IOException) {
                Toast.makeText(
                   reactContext,
                    "Oops! There is some error",
                    Toast.LENGTH_SHORT
                ).show()
                isWallpaperSet.invoke(false)
            }
        }
        val thread = Thread(runnable)
        thread.start()
    }

    companion object {
        fun scaleCenterCrop(source: Bitmap, newHeight: Int, newWidth: Int): Bitmap {
            val sourceWidth = source.getWidth()
            val sourceHeight = source.getHeight()
            val xScale = newWidth.toFloat() / sourceWidth
            val yScale = newHeight.toFloat() / sourceHeight
            val scale = max(xScale.toDouble(), yScale.toDouble()).toFloat()
            val scaledWidth = scale * sourceWidth
            val scaledHeight = scale * sourceHeight
            val left = (newWidth - scaledWidth) / 2
            val top = (newHeight - scaledHeight) / 2
            val targetRect = RectF(left, top, left + scaledWidth, top + scaledHeight)
            val dest = Bitmap.createBitmap(newWidth, newHeight, source.getConfig())
            val canvas = Canvas(dest)
            canvas.drawBitmap(source, null, targetRect, null)
            return dest
        }
    }
}