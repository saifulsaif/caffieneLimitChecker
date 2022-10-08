<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\URL;

class ProductController extends Controller
{

    public function getProducts()
    {
        $url = URL::to('/');
        $products = Product::get()
        ->map(function ($product) use ($url) {
            $product->image = $url . '/' . $product->image;
            return $product;
        });

        if ($products) {
            return response([
                'success' => true,
                'data' => $products,
            ], 200);
        } else {
            return response([
                'success' => false,
                'data' => [],
            ], 400);
        }

    }

}
