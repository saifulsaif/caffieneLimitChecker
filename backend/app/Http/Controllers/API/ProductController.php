<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Wish;
use Illuminate\Http\Request;

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

    public function getWishList(){
        
        $url = URL::to('/');
        $products = Wish::
        join('products','products.id','=','wish_list.product_id')
        ->get()
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


    public function storeWish(Request $request){
        try{

            $product_id = $request->product_id;
            $qty = Wish::where('product_id', $product_id)->value('qty') ?? 0;
             if($product_id){
                Wish::updateOrCreate(
                    ['product_id' => $product_id],
                    [
                        'qty' => $qty + $request->qty,
                    ]);
             }
   
           return response()->json([
                   'success' => true,
                   'message' => 'Wish added successfully!',
               ]);
         }catch(Exception $exception){
              return response()->json([
                   'success' => false,
                   'message' => 'Something went wrong!'
               ]);
         }
    }

    public function removeItem(){
    dd('dsf');
       $isDelete = Wish::delete();
        if($isDelete){
            return response()->json([
                    'success' => true,
                    'message' => 'Refresh successfully!',
                ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong!'
            ]);
        }
  
    }

}
